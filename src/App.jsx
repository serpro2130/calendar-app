// src/App.jsx
import React, { useState } from "react";
import Calendar from "./components/Calendar";
import "./App.css"; // Asegúrate de crear el archivo CSS para los estilos
import ReminderContext from "./contexts/ReminderContext";
import ReminderProvider from "./providers/ReminderProvider";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <ReminderProvider>
      <div className="App">
        <Calendar />
        <button onClick={() => navigate("/calendar")}>Calendar</button>
      </div>
    </ReminderProvider>
  );
}

export default App;
