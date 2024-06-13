export default function getStudentIdsSum(students) {
  const sum = students.reduce((acc, currentValue) => acc + currentValue.id, 0);
  return sum;
}
