"use client";
import { FC } from "react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search Crypto..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{
        width: "300px",
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    />
  );
};

export default SearchBar;