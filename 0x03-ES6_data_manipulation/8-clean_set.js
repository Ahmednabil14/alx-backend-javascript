export default function cleanSet(set, value) {
  let str = '';
  if (value === '') {
    return str;
  }
  for (const item of set) {
    if (item.startsWith(value)) {
      str += `${item.slice(value.length)}-`;
    }
  }
  return str.slice(0, -1);
}
