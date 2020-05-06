export function arrayToLinkedList(arr, i = 0) {
  let val = arr[i];
  let next = isFinite(arr[i + 1]) ? arrayToLinkedList(arr, i + 1) : null;

  return { val, next };
}

// todo: add linked list to array
