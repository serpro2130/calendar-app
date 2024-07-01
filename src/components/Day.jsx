// src/components/Day.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReminderForm from "./ReminderForm";

const Day = ({ day, month, year, reminders, addReminder, editReminder }) => {
  const [weather, setWeather] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState(null);
  const date = `${year}-${month + 1}-${day}`; // Formato YYYY-MM-DD

  const dayReminders = reminders.filter((reminder) => reminder.date === date);

  useEffect(() => {
    if (dayReminders.length > 0) {
      const city = dayReminders[0].city; // Obtener la ciudad del primer recordatorio
      fetchWeather(city, date);
    }
  }, [dayReminders, date]);

  const fetchWeather = async (city, date) => {
    try {
      const response = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${date}?key=F2XDBFFBUMAJBJBH7XN684UWG`
      );
      setWeather(response.data.days[0].conditions);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  const handleReminderClick = (reminder) => {
    setSelectedReminder(reminder);
    setShowForm(true);
  };

  return (
    <div className="day" onClick={() => setShowForm(true)}>
      <div className="day-number">{day}</div>
      <div className="reminders">
        {dayReminders.map((reminder) => (
          <div
            key={reminder.id}
            className="reminder"
            onClick={() => handleReminderClick(reminder)}
          >
            <p>{reminder.text}</p>
            <p>{reminder.time}</p>
            <p>{reminder.city}</p>
            <p>Weather: {weather}</p>
          </div>
        ))}
      </div>
      {showForm && (
        <ReminderForm
          date={date}
          addReminder={addReminder}
          editReminder={editReminder}
          closeForm={() => {
            setShowForm(false);
            setSelectedReminder(null);
          }}
          selectedReminder={selectedReminder}
        />
      )}
    </div>
  );
};

export default Day;
