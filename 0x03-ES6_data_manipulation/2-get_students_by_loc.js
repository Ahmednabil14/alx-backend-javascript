export default function getStudentsByLocation(students, city) {
  const newStudents = students.filter((element) => element.location === city);
  return newStudents;
}
