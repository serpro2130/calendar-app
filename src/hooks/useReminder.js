import { useContext } from "react";
import ReminderContext from "../contexts/ReminderContext";

export default function useReminder() {
  return useContext(ReminderContext);
}
