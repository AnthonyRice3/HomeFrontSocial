import { Select } from "@mantine/core";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";

const SearchBar = ({ filter, setFilter }) => {
  return (
    <div className="flexCenter search-bar">
      <HiLocationMarker color="var(--blue)" size={25} />
      <input
        placeholder="Search by title/city/country..."
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <Select 
                          mt="md"
                          comboboxProps={{ withinPortal: true }}
                          data={['1 ', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
                          placeholder="Bedrooms"
                          label="Amount of Bedrooms"
                          value={filter}
        onChange={(e) => setFilter(e.target.value)}
                          
                        />
      <button className="button">Search</button>
    </div>
  );
};

export default SearchBar;