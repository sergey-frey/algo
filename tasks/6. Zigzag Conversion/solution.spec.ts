import { expect, test } from "vitest";
import { convert } from "./solution";

test("testcase 1 (PAYPALISHIRING, 3)", () => {
  expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
});

test("testcase 2 (PAYPALISHIRING, 4)", () => {
  expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
});

test("testcase 3 (A, 1)", () => {
  expect(convert("A", 1)).toBe("A");
});

test("edgecase 1 short word with large num of rows", () => {
  expect(convert("A", 1000)).toBe("A");
});

test("edgecase 2 specific symbols", () => {
  expect(convert("./,123", 2)).toBe(".,2/13");
});

test("edgecase 3 short string", () => {
  expect(convert("AB", 1)).toBe("AB");
});
