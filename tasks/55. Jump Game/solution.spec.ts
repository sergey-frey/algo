import { test, expect } from "vitest";
import { canJump } from "./solution";

test("[2, 3, 1, 1, 4]", () => {
	expect(canJump([2, 3, 1, 1, 4])).toBe(true);
});

test("[3, 2, 1, 0, 4]", () => {
	expect(canJump([3, 2, 1, 0, 4])).toBe(false);
});

test("[2, 0]", () => {
	expect(canJump([2, 0])).toBe(true);
});

test("[0]", () => {
	expect(canJump([0])).toBe(true);
});
