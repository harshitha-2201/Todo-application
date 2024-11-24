import React from 'react';
import { FaRegCommentDots, FaPaperclip } from 'react-icons/fa'; // Icons for comments and files
import Group633 from '../assets/Group 633.png';

const TaskCard = ({ title, description, priority }) => {
  return (
    <div className={`bg-white p-4 mb-4 rounded-md shadow-md ${priority === 'blue' ? 'border-blue-500' : priority === 'yellow' ? 'border-yellow-500' : 'border-green'} border-l-4`}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className={`h-2 w-2 rounded-full ${priority === 'blue' ? 'bg-blue-500' : priority === 'yellow' ? 'bg-yellow-500' : 'bg-green'} mr-2`}></span>
          <div className="font-bold text-lg text-gray-800">{title}</div>
        </div>
        <div className="text-sm bg-yellow-200 px-3 py-1 rounded-full">Low</div>
      </div>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
     
      <div className="flex mt-2 space-x-2">
        <img src={Group633} alt="Group 633" className=" rounded-full" />
        <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <FaRegCommentDots className="text-gray-400" />
          <span>12 comments</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaPaperclip className="text-gray-400" />
          <span>0 files</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TaskCard;

