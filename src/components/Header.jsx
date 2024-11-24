import React from 'react';
import { TextField, IconButton, Menu, MenuItem,  } from '@mui/material';
import { CalendarToday, Notifications } from '@mui/icons-material';
import MaskGroup from '../assets/Mask Group.png'


const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex justify-between items-center bg-white shadow-md p-3">
      <TextField
        label="Search for anything..."
        variant="outlined"
        className="flex-1"
        size="small"
      />

      <div className="flex items-center space-x-4">
        <IconButton>
          <CalendarToday />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton onClick={handleMenuOpen}>
         <img src = {MaskGroup} alt = ""/>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
        <div className="text-sm">Palak Jain, Rajasthan, India</div>
      </div>
    </div>
  );
};

export default Header;
