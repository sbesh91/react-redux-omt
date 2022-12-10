import {
  initializeWorkerStoreListener,
  workerEvent,
  dispatch,
} from "../src/main-thread-functions";
import * as assert from "assert";
import "mocha";
import crypto from "crypto";
import { Worker } from "./helpers";

describe("initialize worker store listener", () => {
  const worker = new Worker() as any;

  beforeEach(() => {
    workerEvent.value = null;
  });

  it("should construct a worker", () => {
    assert.ok(worker, "worker must be defined");
  });

  it("should listen to worker for events", () => {
    const uuid = crypto.randomUUID();
    initializeWorkerStoreListener(worker);

    worker.postMessage({
      type: "subscribe",
      uuid,
      selector: { selector: "one", params: [] },
    });

    assert.ok(workerEvent.value !== null, "events should not be null");
  });

  it("dispatch should send events to the worker", () => {
    dispatch({ type: "test" });

    assert.ok(workerEvent.value !== null, "events should not be null");
  });
});
