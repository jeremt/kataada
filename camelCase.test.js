import { expect, test } from "vitest";
import { camelCase } from "./camelCase.js";

test("test basic examples", () => {
  expect(camelCase("hello case")).toBe("HelloCase");
  expect(camelCase("camel case word")).toBe("CamelCaseWord");
  expect(camelCase("camelcase word")).toBe("CamelcaseWord");
});
