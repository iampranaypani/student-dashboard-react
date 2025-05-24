import React, { useState, useEffect } from "react";
import StudentDashboard from "./StudentDashboard";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="container">
      <StudentDashboard darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
