import {
  useEffect,
  useMemo,
  useState
} from "react";

import "./App.css";

import studentsData from "./data/students";

import type { Student } from "./types/student";

import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";
import type { SortOption } from "./components/SortControls";

function App() {

  // Student state
  const [students, setStudents] =
    useState<Student[]>([]);

  // Loading state
  const [loading, setLoading] =
    useState(true);

  // Search state
  const [query, setQuery] =
    useState("");

  // Sort state
  const [sortOption, setSortOption] =
    useState<SortOption>("default");

  // Favorites state
  const [favorites, setFavorites] =
    useState<string[]>([]);


  // =================================
  // SIMULATED API FETCH
  // =================================

  useEffect(() => {

    const timer = setTimeout(() => {

      setStudents(studentsData);

      setLoading(false);

    }, 1500);

    return () => {
      clearTimeout(timer);
    };

  }, []);


  // =================================
  // SEARCH + SORT
  // =================================

  const filteredStudents =
    useMemo(() => {

      const searchText =
        query.toLowerCase().trim();

      let result = students.filter(
        (student) => {

          const matchesName =
            student.name
              .toLowerCase()
              .includes(searchText);

          const matchesMajor =
            student.major
              .toLowerCase()
              .includes(searchText);

          return (
            matchesName ||
            matchesMajor
          );
        }
      );


      // Name A-Z
      if (sortOption === "name") {

        result = [...result].sort(
          (a, b) =>
            a.name.localeCompare(b.name)
        );

      }


      // GPA High-Low
      if (sortOption === "gpa") {

        result = [...result].sort(
          (a, b) =>
            b.gpa - a.gpa
        );

      }

      return result;

    }, [
      students,
      query,
      sortOption
    ]);


  // =================================
  // FAVORITE TOGGLE
  // =================================

  const toggleFavorite = (
    studentId: string
  ) => {

    setFavorites(
      (previousFavorites) => {

        if (
          previousFavorites.includes(
            studentId
          )
        ) {

          return previousFavorites.filter(
            (id) => id !== studentId
          );

        }

        return [
          ...previousFavorites,
          studentId
        ];

      }
    );
  };


  // =================================
  // DYNAMIC DOCUMENT TITLE
  // =================================

  useEffect(() => {

    document.title =
      `Dashboard — ${filteredStudents.length} Students`;

  }, [filteredStudents.length]);


  // =================================
  // LOADING
  // =================================

  if (loading) {

    return (
      <div className="loading">

        <div className="spinner"></div>

        <p>
          Loading students...
        </p>

      </div>
    );

  }


  // =================================
  // UI
  // =================================

  return (
    <div className="app">

      <DashboardHeader
        title="Student Dashboard"
        tagline="Manage and monitor student information"
        studentCount={
          filteredStudents.length
        }
        favoriteCount={
          favorites.length
        }
      />

      <main className="dashboard">

        <SearchBar
          query={query}
          onQueryChange={setQuery}
        />

        <SortControls
          sortOption={sortOption}
          onSortChange={setSortOption}
        />

        {filteredStudents.length === 0 ? (

          <div className="no-results">

            <h2>
              No students found
            </h2>

            <p>
              Try another name or major.
            </p>

          </div>

        ) : (

          <section className="student-grid">

            {filteredStudents.map(
              (student) => (

                <StudentCard
                  key={student.id}
                  student={student}
                  isFavorite={
                    favorites.includes(
                      student.id
                    )
                  }
                  onFavorite={() =>
                    toggleFavorite(
                      student.id
                    )
                  }
                />

              )
            )}

          </section>

        )}

      </main>

    </div>
  );
}

export default App;