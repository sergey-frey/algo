import { test, expect } from "vitest";
import { sum } from "./index";

test("", () => {
	expect(sum(1, 2)).toBe(3);
});
