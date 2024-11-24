import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Message, Task, Group, Settings, Lightbulb } from '@mui/icons-material';
import Group7 from '../assets/Group 7.png'

const Sidebar = () => {
  const [activeProject, setActiveProject] = useState('Mobile App');

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-white-800 text-gray p-6">
      {/* Logo and Title Section */}
      <div className="flex items-center space-x-3 mb-8">
        <img src = {Group7} alt = "logo"/>
        <div className="text-2xl font-bold">Project M.</div>
      </div>

      {/* Navigation Links */}
      <nav className="mt-8">
        <ul>
          <li>
            <Link to="/" className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg">
              <Home />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/messages" className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg">
              <Message />
              <span>Messages</span>
            </Link>
          </li>
          <li>
            <Link to="/tasks" className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg">
              <Task />
              <span>Tasks</span>
            </Link>
          </li>
          <li>
            <Link to="/members" className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg">
              <Group />
              <span>Members</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg ">
              <Settings />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* My Projects Section */}
      <div className="mt-8">
        <div className="font-semibold mb-4">MY PROJECTS</div>
        <ul>
          {['Mobile App', 'Website Redesign', 'Design System', 'Wireframes'].map(project => (
            <li key={project}>
              <button
                className={`block w-full text-left px-2 py-2 rounded-md ${activeProject === project ? 'bg-blue-300' : 'hover:bg-blue-500'}`}
                onClick={() => setActiveProject(project)}
              >
                {project}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Thoughts Time Section */}
      <div className="mt-8 flex-row items-center space-x-3 bg-yellow-100 p-4 rounded-md">
        <Lightbulb  className='text-black ml-16'/>
        <div className="flex-1 text-black">Thoughts Time</div>
        <p className=" text-gray-500">We don’t have any notice for you, with your peers.</p>
        <button className="text-blue-800 border p-2 rounded-3xl bg-blue-100">Write a message</button>
      </div>
    </div>
  );
};

export default Sidebar;

