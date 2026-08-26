import StatBadge from "./StatBadge";

import {
  useTheme
} from "../contexts/ThemeContext";

interface DashboardHeaderProps {
  title: string;
  tagline: string;
  studentCount: number;
  favoriteCount: number;
}

function DashboardHeader({
  title,
  tagline,
  studentCount,
  favoriteCount
}: DashboardHeaderProps) {

  const {
    theme,
    toggleTheme
  } = useTheme();

  return (
    <header className="dashboard-header">

      <div>
        <h1>{title}</h1>

        <p>{tagline}</p>
      </div>

      <StatBadge
        label="Students"
        value={studentCount}
      />

      <StatBadge
        label="Favorites"
        value={favoriteCount}
      />

      <button
        onClick={toggleTheme}
        className="theme-button"
      >
        {theme === "light"
          ? "🌙 Dark"
          : "☀️ Light"}
      </button>

      <nav>
        <a href="#">Dashboard</a>
        <a href="#">Students</a>
        <a href="#">Courses</a>
      </nav>

    </header>
  );
}

export default DashboardHeader;