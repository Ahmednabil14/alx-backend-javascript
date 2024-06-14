export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter((student) => student.location === city);
  const studentsNewGrades = filteredStudents.map((student) => {
    for (const newGrade of newGrades) {
      if (student.id === newGrade.studentId) {
        return { ...student, grade: newGrade.grade };
      }
    }
    return { ...student, grade: 'N/A' };
  });
  return studentsNewGrades;
}
