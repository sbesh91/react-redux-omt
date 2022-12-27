import { createWorkerSelector } from "../src";
import * as assert from "assert";
import "mocha";

describe("create worker selector", () => {
  it("should return the correct shape", () => {
    const { name, fn } = createWorkerSelector(
      "one",
      (_rootState: unknown) => {}
    );

    assert.strictEqual(name, "one", "Expects name to be unchanged");
    assert.ok(typeof fn === "function", "Expects function type");
  });
});
