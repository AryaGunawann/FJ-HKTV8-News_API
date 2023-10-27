import React from "react";

const CategoryFilter = ({ category, setCategory }) => {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="p-2 border rounded-md mb-4"
    >
      <option value="business">Business</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Health">Health</option>
    </select>
  );
};

export default CategoryFilter;
