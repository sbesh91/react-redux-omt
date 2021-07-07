import { proxy } from "comlink";
import { applyPatches } from "immer";
import BufferBackedObject, {
  ArrayOfBufferBackedObjects,
} from "buffer-backed-object/buffer-backed-object";

const schema = {
  value: BufferBackedObject.NestedBufferBackedObject({
    value: BufferBackedObject.UTF8String(256),
  }),
  path: BufferBackedObject.UTF8String(256),
  op: BufferBackedObject.UTF8String(16),
  // test: BufferBackedObject.Uint8(),
};

export default async function (store) {
  const subscribers = new Set();

  let latestState = await store.getState();

  const cb = proxy(async () => {
    // const patches = await store.getPatches();

    const buffer = await store.getBuffer();
    const dataView = new ArrayOfBufferBackedObjects(buffer, schema);

    // dataView.forEach((item) => {
    //   console.log({ ...item });
    // });
    const viewPatches = dataView.map((item) => ({
      ...item,
      path: item.path.split(","),
    }));

    // const buffer = await store.getBuffer();
    // console.log(new Uint8Array(buffer), buffer);

    // const dataView = new ArrayOfBufferBackedObjects(buffer, {
    //   op: BufferBackedObject.UTF8String(64),
    //   path: BufferBackedObject.UTF8String(64),
    //   value: BufferBackedObject.UTF8String(64),
    // });
    // debugger;
    // const str = new TextDecoder().decode(buffer);
    // console.log(str);
    // const json = JSON.parse(str);
    // console.log(JSON.stringify(dataView, null, 2));
    // console.log(json);

    latestState = applyPatches(latestState, viewPatches);

    subscribers.forEach((f) => f());
  });

  store.subscribe(cb);

  return {
    dispatch: (action) => store.dispatch(action),
    getState: () => latestState,
    subscribe: (listener) => {
      subscribers.add(listener);
      return () => subscribers.delete(listener);
    },
    replaceReducer: () => {
      throw new Error("Can’t transfer a function");
    },
  };
}
