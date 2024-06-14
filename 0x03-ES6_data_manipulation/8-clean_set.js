export default function cleanSet(set, value) {
  let str = '';
  for (const s of set) {
    let flag = false;
    for (let i = 0; i < value.length; i += 1) {
      if (s[i] !== value[i]) {
        flag = false;
        break;
      } else {
        flag = true;
      }
    }
    if (flag === true) {
      if (s !== set[set.length - 1]) {
        str += `${s.slice(value.length)}-`;
      }
    }
  }
  return str.slice(0, -1);
}
