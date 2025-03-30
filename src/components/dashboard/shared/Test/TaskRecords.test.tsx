import React from "react";
import { render, screen } from "@testing-library/react";
import { useTaskContext } from "../TaskContext";
import TaskRecords from "../TaskRecords";

jest.mock("../TaskContext", () => ({
  useTaskContext: jest.fn(),
}));

describe("TaskRecords Component", () => {
  beforeEach(() => {
    (useTaskContext as jest.Mock).mockReturnValue({
      tasks: [
        {
          id: 1,
          title: "Test Task 1",
          description: "Description 1",
          status: "Pending",
          dueDate: "2025-04-01",
        },
        {
          id: 2,
          title: "Test Task 2",
          description: "Description 2",
          status: "In Progress",
          dueDate: "2025-04-02",
        },
      ],
      loading: false,
      error: null,
      updateTaskStatus: jest.fn(),
    });
  });

  test("renders task list correctly", () => {
    render(<TaskRecords />);
    expect(screen.getByText("Test Task 1")).toBeInTheDocument();
    expect(screen.getByText("Test Task 2")).toBeInTheDocument();
  });

  test("displays loading state", () => {
    (useTaskContext as jest.Mock).mockReturnValue({
      tasks: [],
      loading: true,
      error: null,
      updateTaskStatus: jest.fn(),
    });

    render(<TaskRecords />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("displays error state", () => {
    (useTaskContext as jest.Mock).mockReturnValue({
      tasks: [],
      loading: false,
      error: "Failed to fetch tasks",
      updateTaskStatus: jest.fn(),
    });

    render(<TaskRecords />);
    expect(screen.getByText("Error: Failed to fetch tasks")).toBeInTheDocument();
  });
});
