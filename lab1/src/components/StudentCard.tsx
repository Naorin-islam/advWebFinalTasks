import type { Student } from "../types/student";

import CourseTag from "./CourseTag";
import StatBadge from "./StatBadge";

interface StudentCardProps {
    student: Student;
}

function StudentCard({
    student
}: StudentCardProps) {
    return (
        <div className="student-card">

            <img
                src={student.avatar}
                alt={student.name}
                className="student-avatar"
            />

            <div className="student-info">

                <h2>{student.name}</h2>

                <p className="student-id">
                    Student ID: {student.id}
                </p>

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

                    {student.courses.map(
                        (course) => (
                            <CourseTag
                                key={course.name}
                                courseName={course.name}
                                color={course.color}
                            />
                        )
                    )}

                </div>

            </div>
        </div>
    );
}

export default StudentCard;