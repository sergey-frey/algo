export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (!l1 || !l2) return null;

  let l1Ptr: ListNode | null = l1;
  let l2Ptr: ListNode | null = l2;

  const sum = new ListNode(0);

  let sumPtr: ListNode | null = sum;

  while (l1Ptr || l2Ptr) {
    sumPtr.val += (l1Ptr?.val ?? 0) + (l2Ptr?.val ?? 0);

    sumPtr.next = new ListNode(Math.floor(sumPtr.val / 10));
    sumPtr.val %= 10;

    if (l1Ptr) {
      l1Ptr = l1Ptr.next;
    }

    if (l2Ptr) {
      l2Ptr = l2Ptr.next;
    }

    if (!l1Ptr && !l2Ptr && sumPtr.next.val === 0) {
      sumPtr.next = null;
      break;
    }

    sumPtr = sumPtr.next;
  }

  return sum;
}

export { addTwoNumbers };
