import StatBadge from "./StatBadge";

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

      <nav>
        <a href="#">Dashboard</a>
        <a href="#">Students</a>
        <a href="#">Courses</a>
      </nav>

    </header>
  );
}

export default DashboardHeader;