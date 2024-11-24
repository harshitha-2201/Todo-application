import React from 'react';
import { IconButton } from '@mui/material';
import { Edit, Link as LinkIcon  } from '@mui/icons-material';
import Group642 from '../assets/Group 642.png'
const PageTitle = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-semibold">Mobile App</h1>
        <IconButton>
          <Edit />
        </IconButton>
        <IconButton>
          <LinkIcon />
        </IconButton>
      </div>
      
      <div className="flex items-center space-x-2 ">
        <a>+Invite</a>
        <img src = {Group642} alt = ''/>
      </div>
    </div>
  );
};

export default PageTitle;
