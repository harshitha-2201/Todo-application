import React, { useState } from "react";
import TaskCard from "./TaskCard";
import FiltersAndDateSelector from "./Filters";

const TaskBoard = () => {
  const [columns, setColumns] = useState([
    {
      title: "To Do",
      tasks: [{ title: "Brainstorming", description: "Brief explanation", priority: "blue" }],
      color: "blue",
      stamp: "4",
    },
    {
      title: "On Progress",
      tasks: [{ title: "Design Mockup", description: "Brief explanation", priority: "yellow" }],
      color: "yellow",
      stamp: "3",
    },
    {
      title: "Done",
      tasks: [{ title: "Review", description: "Brief explanation", priority: "green" }],
      color: "green",
      stamp: "2",
    },
  ]);

  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [draggedTask, setDraggedTask] = useState(null);
  const [filter, setFilter] = useState("All"); // New state for selected filter

  // Add Task Handler
  const handleAddTask = (colTitle) => {
    if (newTask.title.trim() === "" || newTask.description.trim() === "") {
      alert("Please fill out the task title and description.");
      return;
    }

    const updatedColumns = columns.map((col) =>
      col.title === colTitle
        ? {
            ...col,
            tasks: [...col.tasks, { title: newTask.title, description: newTask.description, priority: col.color }],
          }
        : col
    );

    setColumns(updatedColumns);
    setNewTask({ title: "", description: "" }); // Reset task input
    setSelectedColumn(null); // Close the input UI
  };

  // Move Task Handler
  const handleTaskDrop = (colTitle) => {
    if (!draggedTask) return;

    const updatedColumns = columns.map((col) => {
      if (col.title === draggedTask.column) {
        return {
          ...col,
          tasks: col.tasks.filter((task) => task !== draggedTask.task),
        };
      } else if (col.title === colTitle) {
        return {
          ...col,
          tasks: [...col.tasks, draggedTask.task],
        };
      }
      return col;
    });

    setColumns(updatedColumns);
    setDraggedTask(null); // Clear dragged task
  };

  // Filter Logic
  const filteredColumns = columns.map((col) => ({
    ...col,
    tasks:
      filter === "All"
        ? col.tasks
        : col.tasks.filter((task) => task.priority === filter.toLowerCase()),
  }));

  return (
    <div className="p-6">
      {/* Filters and Date Selector */}
      <FiltersAndDateSelector onFilterChange={setFilter} />

      {/* Task Board */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredColumns.map((col) => (
          <div
            key={col.title}
            className="p-4 bg-gray-100 rounded-lg shadow-md"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleTaskDrop(col.title)}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-xl text-gray-800">
                {col.title}
                <a className="bg-gray-300 p-2 rounded-full m-2">{col.stamp}</a>
              </h2>
              <button
                className="text-blue-500 text-2xl"
                onClick={() => setSelectedColumn(col.title)}
              >
                +
              </button>
            </div>
            <hr
              className={`border-b-2 ${
                col.color === "blue"
                  ? "border-blue-500"
                  : col.color === "yellow"
                  ? "border-yellow-500"
                  : "border-green-500"
              } mb-4`}
            />
            {col.tasks.map((task, idx) => (
              <div
                key={idx}
                draggable
                onDragStart={() => setDraggedTask({ task, column: col.title })}
              >
                <TaskCard
                  title={task.title}
                  description={task.description}
                  priority={col.color}
                />
              </div>
            ))}
            {/* Add Task Form */}
            {selectedColumn === col.title && (
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Task Title"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  className="w-full p-2 mb-2 border rounded-md"
                />
                <textarea
                  placeholder="Task Description"
                  value={newTask.description}
                  onChange={(e) =>
                    setNewTask({ ...newTask, description: e.target.value })
                  }
                  className="w-full p-2 mb-2 border rounded-md"
                />
                <button
                  className="w-full bg-blue-500 text-white py-2 rounded-md"
                  onClick={() => handleAddTask(col.title)}
                >
                  Add Task
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
