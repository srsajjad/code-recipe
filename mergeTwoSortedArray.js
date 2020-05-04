export const merge = (a = [], b = []) => {
  let arr = [];

  let l = [...a, Infinity];
  let r = [...b, Infinity];

  let i = 0;
  let j = 0;

  while (i < l.length - 1 || j < r.length - 1) {
    if (l[i] <= r[j]) arr.push(l[i++]);
    else if (r[j] <= l[i]) arr.push(r[j++]);
  }

  return arr;
};
