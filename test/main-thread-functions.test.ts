import {
  initializeWorkerStoreListener,
  workerEvent,
} from "../src/main-thread-functions";
import Worker from "web-worker";
import * as assert from "assert";
import "mocha";
import crypto from "crypto";
import { effect } from "@preact/signals-react";
const url = new URL("./store.ts", import.meta.url);
const worker = new Worker(url, { type: "module" });

describe("initialize worker store listener", () => {
  it("should construct a worker listener", () => {
    const uuid = crypto.randomUUID();
    assert.ok(worker, "worker must be defined");

    initializeWorkerStoreListener(worker);

    worker.postMessage({
      type: "subscribe",
      uuid,
      selector: { selector: "one", params: [] },
    });

    effect(() => {
      console.log(workerEvent.value);

      // assert.ok(workerEvent.value, "events should not be null");
    });
  });
});
