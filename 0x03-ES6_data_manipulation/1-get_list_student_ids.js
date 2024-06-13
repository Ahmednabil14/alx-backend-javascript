export default function getListStudentIds(objects) {
  if (!(Array.isArray(objects))) {
    return [];
  }
  const ids = objects.map((element) => element.id);
  return ids;
}
