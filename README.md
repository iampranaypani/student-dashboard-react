# 🎓 Student Dashboard Web App

An interactive, modern **Student Dashboard** built with **React.js**, featuring theme toggle, responsive charts, elegant UI with glassmorphism, a to-do list, announcements section, and more — everything a student needs in one place.

## 🎥 Demo

👉 **Watch the full screen recording demo**: [Click here to view](https://github.com/iampranaypani/student-dashboard-react/blob/main/Screen%20Recording%202025-05-24%20230557.mp4)  

## ✨ Features

- 🌗 **Light/Dark Mode Toggle** with smooth transitions
- 🧊 **Glassmorphism UI** for a beautiful, modern design
- 📊 **Interactive Charts** (Pie & Line) using Recharts
- 🗓️ **Upcoming Events Carousel** using Framer Motion
- ✅ **To-Do List** with Add/Edit/Delete/Complete
- 📰 **Animated Announcements Section**
- 🧱 Modular, reusable **React Components**
- 📱 **Fully Responsive** design (mobile/tablet/desktop)
- 💾 Persistent theme & to-dos using **localStorage**
- ⚡ **Smooth Animations** & transitions across UI
- ♿ **Accessible Markup** with keyboard support

## 🛠️ Tech Stack

- React.js (Functional Components + Hooks)
- Tailwind CSS *(optional, or pure CSS if Tailwind is not installed)*
- Recharts
- Framer Motion
- LocalStorage
- HTML5 & CSS3

## 📁 Project Structure

```plaintext
student-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Dashboard.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── GPAChart.jsx
│   │   ├── AttendanceChart.jsx
│   │   ├── EventsCarousel.jsx
│   │   ├── ToDoList.jsx
│   │   ├── Announcements.jsx
│   │   └── ...more
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
