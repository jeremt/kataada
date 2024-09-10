import { expect, test } from "vitest";
import { countA, returnA } from "./aToolbox.js";

test("Count A", () => {
  expect(countA(["Alice", "Martine", "Abdel"])).toBe(2);
});

test("Return A", () => {
  expect(returnA(["Alice", "Martine", "Abdel"])).toStrictEqual([
    "Alice",
    "Abdel",
  ]);
});
