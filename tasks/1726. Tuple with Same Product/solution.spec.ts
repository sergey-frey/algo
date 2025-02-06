import { test, expect } from "vitest";
import { tupleSameProduct } from "./solution";

test("[2,3,4,6]", () => {
  expect(tupleSameProduct([2,3,4,6])).toBe(8);
})

test("[1,2,4,5,10]", () => {
  expect(tupleSameProduct([1,2,4,5,10])).toBe(16);
})

test("[1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192]", () => {
  expect(tupleSameProduct([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192])).toBe(1288);
})