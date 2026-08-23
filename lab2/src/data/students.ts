import type { Student } from "../types/student";

const students: Student[] = [
  {
    id: "101",
    name: "Naorin Islam",
    avatar: "https://i.pravatar.cc/150?img=1",
    gpa: 3.8,
    major: "Computer Science",
    courses: [
      { name: "React", color: "#61dafb" },
      { name: "Database", color: "#4caf50" },
      { name: "AI", color: "#ff9800" }
    ]
  },
  {
    id: "102",
    name: "Sarah Ahmed",
    avatar: "https://i.pravatar.cc/150?img=2",
    gpa: 3.6,
    major: "Software Engineering",
    courses: [
      { name: "JavaScript", color: "#f7df1e" },
      { name: "Node.js", color: "#68a063" }
    ]
  },
  {
    id: "103",
    name: "Rahim Hasan",
    avatar: "https://i.pravatar.cc/150?img=3",
    gpa: 3.9,
    major: "Computer Science",
    courses: [
      { name: "Python", color: "#3776ab" },
      { name: "Machine Learning", color: "#9c27b0" }
    ]
  },
  {
    id: "104",
    name: "Ayesha Rahman",
    avatar: "https://i.pravatar.cc/150?img=4",
    gpa: 3.7,
    major: "Information Technology",
    courses: [
      { name: "Networking", color: "#2196f3" },
      { name: "Security", color: "#f44336" }
    ]
  }
];

export default students;