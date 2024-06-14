export default function hasValuesFromArray(set, array) {
  let bool = false;
  for (const arr of array) {
    bool = set.has(arr);
    if (bool === false) {
      break;
    }
  }
  return bool;
}
