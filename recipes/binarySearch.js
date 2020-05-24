export function binarySearch(arr, target, left, right) {
    let l = isFinite(left) ? left : 0
    let r = isFinite(right) ? right : arr.length
    
    let mid = Math.floor((l + r) / 2)

    let current = arr[mid]

    if (target === current)
        return mid

    if (target > current)
        return binarySearch(arr, target, mid + 1, r)

    if (target < current)
        return binarySearch(arr, target, l, mid - 1)

    return -1
}
