import {
  useStudents,
} from "../contexts/StudentContext";

function SortControls() {
  const {
    sortOption,
    setSortOption,
  } = useStudents();

  return (
    <div className="sort-container">

      <label htmlFor="sort">
        Sort by:
      </label>

      <select
        id="sort"
        value={sortOption}
        onChange={(event) =>
          setSortOption(
            event.target.value as
              "default" | "name" | "gpa"
          )
        }
      >
        <option value="default">
          Default
        </option>

        <option value="name">
          Name A-Z
        </option>

        <option value="gpa">
          GPA High-Low
        </option>
      </select>

    </div>
  );
}

export default SortControls;