import type { Student } from "../types/student";

import CourseTag from "./CourseTag";
import StatBadge from "./StatBadge";

import { useStudents } from "../contexts/StudentContext";

interface StudentCardProps {
  student: Student;
}

function StudentCard({ student }: StudentCardProps) {

  const {
    favorites,
    toggleFavorite,
    removeStudent,
  } = useStudents();

  const isFavorite =
    favorites.includes(student.id);

  return (
    <div className="student-card">

      <img
        src={student.avatar}
        alt={student.name}
        className="student-avatar"
      />

      <div className="student-info">

        <div className="student-title">

          <div>
            <h2>{student.name}</h2>

            <p className="student-id">
              Student ID: {student.id}
            </p>
          </div>

          <button
            className={`favorite-button ${
              isFavorite ? "favorite" : ""
            }`}
            onClick={() =>
              toggleFavorite(student.id)
            }
          >
            {isFavorite ? "★" : "☆"}
          </button>

        </div>

        <p className="student-major">
          {student.major}
        </p>

        <div className="student-stats">

          <StatBadge
            label="GPA"
            value={student.gpa}
          />

          <StatBadge
            label="Courses"
            value={student.courses.length}
          />

        </div>

        <div className="courses">

          {student.courses.map((course) => (
            <CourseTag
              key={course.name}
              courseName={course.name}
              color={course.color}
            />
          ))}

        </div>

        <button
          className="remove-button"
          onClick={() =>
            removeStudent(student.id)
          }
        >
          Remove Student
        </button>

      </div>
    </div>
  );
}

export default StudentCard;