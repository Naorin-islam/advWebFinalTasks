import { useEffect } from "react";

import "./App.css";

import DashboardHeader from "./components/DashboardHeader";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";
import StudentCard from "./components/StudentCard";
import AddStudentForm from "./components/AddStudentForm";

import { useStudents } from "./contexts/StudentContext";

function App() {
  const {
    favorites,
    filteredStudents,
    successMessage,
  } = useStudents();

  useEffect(() => {
    document.title =
      `Dashboard — ${filteredStudents.length} Students`;
  }, [filteredStudents.length]);

  return (
    <div className="app">

      <DashboardHeader
        title="Student Dashboard"
        tagline="Manage and monitor student information"
        studentCount={filteredStudents.length}
        favoriteCount={favorites.length}
      />

      {successMessage && (
        <div className="success-notification">
          {successMessage}
        </div>
      )}

      <main className="dashboard">

        <AddStudentForm />

        <SearchBar />

        <SortControls />

        {filteredStudents.length === 0 ? (
          <div className="no-results">
            <h2>No students found</h2>

            <p>
              Try another name or major.
            </p>
          </div>
        ) : (
          <section className="student-grid">

            {filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
              />
            ))}

          </section>
        )}

      </main>
    </div>
  );
}

export default App;