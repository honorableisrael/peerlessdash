import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const mockAPI = "https://jsonplaceholder.typicode.com/posts";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
  dueDate: string;
}

interface TaskContextType {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  fetchTasks: () => void;
  updateTaskStatus: (taskId: number, status: Task["status"]) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTaskContext must be used within a TaskProvider");
  return context;
};

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get<{ id: number; title: string; body: string }[]>(mockAPI);
      const formattedTasks = response.data.map((post, index) => ({
        id: post.id,
        title: post.title,
        description: post.body,
        status: ["Pending", "In Progress", "Completed"][index % 3] as Task["status"],
        dueDate: new Date(Date.now() + index * 86400000).toISOString(),
      }));
      setTasks(formattedTasks);
      setError(null);
    } catch {
      setError("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  const updateTaskStatus = async (taskId: number, status: Task["status"]) => {
    try {
      await axios.patch(`${mockAPI}/${taskId}`, { status });
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? { ...task, status } : task))
      );
    } catch {
      setError("Failed to update task");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, loading, error, fetchTasks, updateTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};