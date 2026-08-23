interface StatBadgeProps {
    label: string;
    value: string | number;
  }
  
  function StatBadge({
    label,
    value
  }: StatBadgeProps) {
    return (
      <div className="stat-badge">
        <span className="stat-label">
          {label}
        </span>
  
        <strong className="stat-value">
          {value}
        </strong>
      </div>
    );
  }
  
  export default StatBadge;