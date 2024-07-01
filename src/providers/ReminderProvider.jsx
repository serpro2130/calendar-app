import { useState } from "react";
import ReminderContext from "../contexts/ReminderContext";

export default function ReminderProvider({ children }) {
  const [reminders, setReminders] = useState([]);

  const addReminder = (reminder) => {
    setReminders([...reminders, reminder]);
  };

  const editReminder = (id, updatedReminder) => {
    setReminders(
      reminders.map((reminder) =>
        reminder.id === id ? updatedReminder : reminder
      )
    );
  };

  return (
    <ReminderContext.Provider value={{ reminders, addReminder, editReminder }}>
      {children}
    </ReminderContext.Provider>
  );
}
