import { test, expect } from "vitest";
import { areAlmostEqual } from "./solution";

test("bank kanb", () => {
	expect(areAlmostEqual("bank", "kanb")).toBe(true);
});

test("bank kanc", () => {
	expect(areAlmostEqual("bank", "kanc")).toBe(false);
});

test("attack defend", () => {
	expect(areAlmostEqual("attack", "defend")).toBe(false);
});

test("kelb kelb", () => {
	expect(areAlmostEqual("kelb", "kelb")).toBe(true);
});

test("abcd dcba", () => {
	expect(areAlmostEqual("abcd", "dcba")).toBe(false);
});

test("npv zpn", () => {
	expect(areAlmostEqual("npv", "zpn")).toBe(false);
});
