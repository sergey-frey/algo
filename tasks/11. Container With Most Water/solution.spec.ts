import { test, expect } from "vitest";
import { maxArea } from "./solution";

test("[1,8,6,2,5,4,8,3,7]", () => {
	expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});

test("[1,1]", () => {
	expect(maxArea([1, 1])).toBe(1);
});

test("[0,0]", () => {
	expect(maxArea([0, 0])).toBe(0);
});

test("[0,0,1,0,0]", () => {
	expect(maxArea([0, 0, 1, 0, 0])).toBe(0);
});
