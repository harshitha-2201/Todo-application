import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PageTitle from './components/PageTitle';
import FiltersAndDateSelector from './components/Filters';
import TaskBoard from './components/TaskBoard';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content Area */}
        <div className="ml-64 w-full flex flex-col">
          {/* Header */}
          <Header />

          {/* Page Title */}
          <PageTitle />

          {/* Filters and Date Selector */}
          {/* <FiltersAndDateSelector  /> */}

          {/* Main Content: Task Board and Invite Section */}
          <div className="flex-1 overflow-auto p-6">
            <Routes>
              <Route path="/" element={<TaskBoard />} />
              <Route path="/tasks" element={<TaskBoard />} />
            </Routes>
          </div>

          {/* Static Invite Section (can be moved to routes as needed) */}
        </div>
      </div>
    </Router>
  );
}

export default App;
