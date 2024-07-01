// src/components/Calendar.jsx
import React, { useState } from "react";
import Day from "./Day";
import useReminder from "../hooks/useReminder";

const Calendar = ({}) => {
  const { reminders, addReminder, editReminder } = useReminder();
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeMonth = (offset) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + offset,
      1
    );
    setCurrentDate(newDate);
  };

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  const daysInPreviousMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  ).getDate();

  const renderDays = () => {
    const days = [];

    // Render empty days for the previous month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="empty-day">
          {daysInPreviousMonth - firstDayOfMonth + i + 1}
        </div>
      );
    }

    // Render actual days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <Day
          key={day}
          day={day}
          month={currentDate.getMonth()}
          year={currentDate.getFullYear()}
          reminders={reminders}
          addReminder={addReminder}
          editReminder={editReminder}
        />
      );
    }

    // Render empty days for the next month
    const totalRenderedDays = firstDayOfMonth + daysInMonth;
    const remainingDays =
      totalRenderedDays % 7 === 0 ? 0 : 7 - (totalRenderedDays % 7);

    for (let i = 0; i < remainingDays; i++) {
      days.push(
        <div key={`empty-next-${i}`} className="empty-day">
          {i + 1}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="calendar-navigation">
        <button onClick={() => changeMonth(-1)}>Previous Month</button>
        <h2>
          {currentDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button onClick={() => changeMonth(1)}>Next Month</button>
      </div>
      <div className="calendar-header">
        {[
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ].map((day) => (
          <div key={day} className="day-header">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-body">{renderDays()}</div>
    </div>
  );
};

export default Calendar;
