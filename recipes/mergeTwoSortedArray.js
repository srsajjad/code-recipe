export function merge(l = [], r = []) {
  let arr = [];

  let i = 0;
  let j = 0;

  while (i < l.length || j < r.length) {
    if (isNumber(l[i]) && isNumber(r[j])) {
      if (l[i] <= r[j]) arr.push(l[i++]);
      if (r[j] <= l[i]) arr.push(r[j++]);
    } else if (isNumber(l[i])) arr.push(l[i++]);
    else if (isNumber(r[j])) arr.push(r[j++]);
  }

  return arr;
}

function isNumber(x) {
  if ((x > 0 || x < 0 || x === 0) && typeof x === "number") return true;
  else return false;
}
