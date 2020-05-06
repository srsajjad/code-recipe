// equivalent to Python max()

export function maxString(a, b) {
  if (a > b) return a;
  if (b > a) return b;
  if (a.length >= b.length) return a;
  return b;
}
