// src/components/__tests__/ReminderForm.test.jsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ReminderForm from "../ReminderForm";

test("should add a new reminder", () => {
  const addReminder = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <ReminderForm
      date="2024-06-30"
      addReminder={addReminder}
      closeForm={() => {}}
    />
  );

  fireEvent.change(getByPlaceholderText("Reminder text"), {
    target: { value: "Test Reminder" },
  });
  fireEvent.change(getByPlaceholderText("City"), {
    target: { value: "New York" },
  });
  fireEvent.change(getByPlaceholderText("time"), {
    target: { value: "12:00" },
  });

  fireEvent.click(getByText("Add Reminder"));

  expect(addReminder).toHaveBeenCalledWith({
    id: expect.any(Number),
    text: "Test Reminder",
    city: "New York",
    date: "2024-06-30",
    time: "12:00",
  });
});
