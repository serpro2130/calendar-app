// src/components/ReminderForm.jsx
import React, { useState } from "react";
//import "./ReminderForm.css"; // Asegúrate de crear el archivo CSS para los estilos

const ReminderForm = ({
  date,
  addReminder,
  editReminder,
  closeForm,
  selectedReminder,
}) => {
  const [text, setText] = useState(
    selectedReminder ? selectedReminder.text : ""
  );
  const [city, setCity] = useState(
    selectedReminder ? selectedReminder.city : ""
  );
  const [time, setTime] = useState(
    selectedReminder ? selectedReminder.time : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const reminder = {
      id: selectedReminder ? selectedReminder.id : Date.now(),
      text,
      city,
      date,
      time,
    };
    if (selectedReminder) {
      editReminder(reminder.id, reminder);
    } else {
      addReminder(reminder);
    }
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit} className="reminder-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={30}
        placeholder="Reminder text"
        required
      />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button type="submit">
        {selectedReminder ? "Edit Reminder" : "Add Reminder"}
      </button>
    </form>
  );
};

export default ReminderForm;
