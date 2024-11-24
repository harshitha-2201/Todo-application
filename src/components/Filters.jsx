import React, { useState } from "react";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { FilterList, CalendarToday, GridOn, List } from "@mui/icons-material";

const FiltersAndDateSelector = ({ onFilterChange }) => {
  const [filterAnchor, setFilterAnchor] = useState(null);

  const handleFilterClick = (event) => {
    setFilterAnchor(event.currentTarget);
  };

  const handleFilterSelect = (filter) => {
    onFilterChange(filter); // Pass the selected filter back to the parent
    setFilterAnchor(null);
  };

  return (
    <div className="flex space-x-4 p-4">
      <Button
        variant="outlined"
        startIcon={<FilterList />}
        onClick={handleFilterClick}
      >
        Filter
      </Button>
      <Menu
        anchorEl={filterAnchor}
        open={Boolean(filterAnchor)}
        onClose={() => setFilterAnchor(null)}
      >
        <MenuItem onClick={() => handleFilterSelect("All")}>All</MenuItem>
        <MenuItem onClick={() => handleFilterSelect("blue")}>Blue</MenuItem>
        <MenuItem onClick={() => handleFilterSelect("yellow")}>Yellow</MenuItem>
        <MenuItem onClick={() => handleFilterSelect("green")}>Green</MenuItem>
      </Menu>
      <Button variant="outlined" startIcon={<CalendarToday />}>
        Today
      </Button>
      <div className="flex space-x-2">
        <IconButton>
          <List />
        </IconButton>
        <IconButton>
          <GridOn />
        </IconButton>
      </div>
    </div>
  );
};

export default FiltersAndDateSelector;
