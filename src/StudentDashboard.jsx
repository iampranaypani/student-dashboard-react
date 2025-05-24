import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const gradesData = [
  { name: "Math", value: 90 },
  { name: "Science", value: 85 },
  { name: "English", value: 78 },
  { name: "History", value: 88 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const StudentDashboard = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <header className="header">
        <h1>Student Dashboard</h1>
        <button
          className={`btn ${darkMode ? "dark" : ""}`}
          onClick={() => setDarkMode(!darkMode)}
        >
          Toggle Theme
        </button>
      </header>

      <div className="grid grid-4">
        {/* Profile Card */}
        <div className="card">
          <h2>Profile</h2>
          <p>Name: Pranay Pani</p>
          <p>Branch: CSE</p>
          <p>Year: 2nd</p>
        </div>

        {/* Attendance */}
        <div className="card">
          <h2>Attendance</h2>
          <p>Overall: 92%</p>
        </div>

        {/* Upcoming Events */}
        <div className="card">
          <h2>Upcoming Events</h2>
          <ul>
            <li>Hackathon – May 30</li>
            <li>Seminar – June 10</li>
          </ul>
        </div>

        {/* GPA Stats */}
        <div className="card">
          <h2>GPA</h2>
          <p>Current GPA: 8.9</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="card chart-container">
        <h2>Subject-wise Grades</h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={gradesData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {gradesData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* To-Do List */}
      <div className="card todo-list">
        <h2>To-Do List</h2>
        <ul>
          <li>Revise React basics</li>
          <li>Finish Blockchain tutorial</li>
          <li>Push projects to GitHub</li>
        </ul>
      </div>

      {/* Announcements */}
      <div className="card announcements">
        <h2>Announcements</h2>
        <p>All students must submit the AI assignment by Monday.</p>
      </div>
    </>
  );
};

export default StudentDashboard;
