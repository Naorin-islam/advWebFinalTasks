import "./App.css";

import students from "./data/students";

import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";

function App() {
  return (
    <div className="app">

      <DashboardHeader
        title="Student Dashboard"
        tagline="Manage and monitor student information"
        studentCount={students.length}
      />

      <main className="dashboard">

        <section className="student-grid">

          {students.map(
            (student) => (
              <StudentCard
                key={student.id}
                student={student}
              />
            )
          )}

        </section>

      </main>

    </div>
  );
}

export default App;