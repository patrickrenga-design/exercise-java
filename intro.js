// Exercise: Practice working with an array of objects.
const students = [
  { name: "Maya", age: 19, subject: "Math", grade: 92, passed: true },
  { name: "Ethan", age: 21, subject: "Science", grade: 78, passed: true },
  { name: "Sofia", age: 18, subject: "Math", grade: 64, passed: false },
  { name: "Liam", age: 20, subject: "History", grade: 85, passed: true },
  { name: "Ava", age: 22, subject: "Science", grade: 71, passed: true },
  { name: "Noah", age: 19, subject: "History", grade: 58, passed: false },
];

// Try these tasks:
// 1. Create an array containing only the students who passed.
// 2. Get the names of all students studying Math.
// 3. Find the average grade of all students.
// 4. Find the student with the highest grade.
// 5. Create an array of student names with their grades, e.g. "Maya: 92".

const passedStudents = students.filter((student) => student.passed);
console.log(passedStudents);