// Числа могут бять нулями
// Числа не соержат ведущих нудей (связанные списки не оканчиваются нулями)

import { expect, test } from "vitest";
import { addTwoNumbers, ListNode } from "./solution";

const arrToList = (arr: number[]) => {
  const res = new ListNode(arr[0]);

  let ptr = res;

  for (let i = 1; i < arr.length; i++) {
    ptr.next = new ListNode(arr[i]);
    ptr = ptr.next;
  }

  return res;
};

const listToArr = (list: ListNode | null) => {
  const res: number[] = [];

  let ptr = list;

  while (ptr) {
    res.push(ptr.val);
    ptr = ptr.next;
  }

  return res;
};

test("Nums equal length", () => {
  expect(
    listToArr(addTwoNumbers(arrToList([1, 2, 3]), arrToList([4, 5, 6]))),
  ).toEqual([5, 7, 9]);
});

test("First number is zero", () => {
  expect(
    listToArr(addTwoNumbers(arrToList([0]), arrToList([4, 5, 6]))),
  ).toEqual([4, 5, 6]);
});

test("Second number is zero", () => {
  expect(
    listToArr(addTwoNumbers(arrToList([4, 5, 6]), arrToList([0]))),
  ).toEqual([4, 5, 6]);
});

test("0 + 0", () => {
  expect(listToArr(addTwoNumbers(arrToList([0]), arrToList([0])))).toEqual([0]);
});

test("testcase 1 (243 + 564)", () => {
  expect(
    listToArr(addTwoNumbers(arrToList([2, 4, 3]), arrToList([5, 6, 4]))),
  ).toEqual([7, 0, 8]);
});

test("testcase 3 (9999999 + 9999)", () => {
  expect(
    listToArr(
      addTwoNumbers(arrToList([9, 9, 9, 9, 9, 9, 9]), arrToList([9, 9, 9, 9])),
    ),
  ).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
});
