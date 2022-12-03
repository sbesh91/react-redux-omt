import { createStore } from "redux";
import { expose, transfer } from "comlink";
import { enablePatches, Patch, produceWithPatches } from "immer";
import BufferBackedObject, {
  ArrayOfBufferBackedObjects,
  Descriptor,
} from "buffer-backed-object/buffer-backed-object";

enablePatches();

const schema = {
  value: BufferBackedObject.NestedBufferBackedObject({
    value: BufferBackedObject.UTF8String(256),
  }),
  path: BufferBackedObject.UTF8String(256),
  op: BufferBackedObject.UTF8String(16),
  // test: BufferBackedObject.Uint8(),
};
interface Store {
  [key: string]: {
    value: string;
  };
}

interface Action {
  type: string;
}

let init: Store = {};
let patches: Patch[];

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

const reduce = produceWithPatches((draft: Store, action: Action) => {
  const key = uuidv4();

  switch (action.type) {
    case "INCREMENT":
      draft[key] = {
        value: `${key}-increment`,
      };
      break;
    case "DECREMENT":
      draft[key] = {
        value: `${key}-decrement`,
      };
      break;
  }
});

function byteSize(str: string) {
  return new Blob([str]).size;
}

function decode(dataView: DataView, byteOffset: number, maxBytes: number) {
  return new TextDecoder()
    .decode(new Uint8Array(dataView.buffer, byteOffset, maxBytes))
    .replace(/\u0000+$/, "");
}

function create(
  dataView: DataView,
  byteOffset: number,
  value: string,
  maxBytes: number
) {
  const encoding = new TextEncoder().encode(value);
  const target = new Uint8Array(dataView.buffer, byteOffset, maxBytes);
  target.fill(0);
  target.set(encoding.subarray(0, maxBytes));
}

export const stringArrayBuffer = (): Descriptor<string[]> => {
  let pathAsBytes = [];

  function get(dataView, byteOffset) {
    let offset = byteOffset;
    let values = [];

    for (let i = 0; i < pathAsBytes.length; i++) {
      const size = pathAsBytes[i];
      const value = decode(dataView, offset, size);
      values.push(value);
      offset += size;
    }

    return values;
  }

  function set(dataView, byteOffset, values) {
    let offset = byteOffset;
    pathAsBytes = values.map(byteSize);

    for (let i = 0; i < values.length; i++) {
      const size = pathAsBytes[i];
      create(dataView, offset, values[i], size);
      offset += size;
    }
  }

  return {
    size: 0,
    get,
    set,
  };
};

const reducer = (state = init, action: Action) => {
  const [next, nextPatches] = reduce(state, action);
  patches = nextPatches;

  return next;
};

// expose
function getPatches() {
  return patches;
}

function getBuffer() {
  const buffer = new ArrayBuffer(1024);
  const dataView = new ArrayOfBufferBackedObjects(buffer, schema);

  patches.forEach(({ op, path, value }, i) => {
    // dataView[i].test = 12;
    dataView[i].op = op;
    dataView[i].path = path.join(",");
    dataView[i].value.value = value.value;
  });

  return transfer(buffer, [buffer]);
}

//expose general fetch handler in here
//this way heavy parsing takes place in the worker
const store = createStore(reducer);

expose({
  getState: store.getState,
  dispatch: store.dispatch,
  subscribe: (func: () => void) => {
    store.subscribe(func);
  },
  getPatches,
  getBuffer,
});
