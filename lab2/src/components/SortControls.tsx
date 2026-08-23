export type SortOption =
  | "default"
  | "name"
  | "gpa";

interface SortControlsProps {
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
}

function SortControls({
  sortOption,
  onSortChange
}: SortControlsProps) {
  return (
    <div className="sort-controls">

      <button
        className={sortOption === "default" ? "active" : ""}
        onClick={() => onSortChange("default")}
      >
        Default
      </button>

      <button
        className={sortOption === "name" ? "active" : ""}
        onClick={() => onSortChange("name")}
      >
        Name A-Z
      </button>

      <button
        className={sortOption === "gpa" ? "active" : ""}
        onClick={() => onSortChange("gpa")}
      >
        GPA High-Low
      </button>

    </div>
  );
}

export default SortControls;