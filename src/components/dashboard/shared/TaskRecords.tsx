import React, { useEffect, useState } from "react";
import axios from "axios";

interface Task {
  id: number;
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
  dueDate: string;
}

const mockAPI = "https://jsonplaceholder.typicode.com/posts";

const PendingActions: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  useEffect(() => {
    axios
      .get<{ id: number; title: string; body: string }[]>(mockAPI)
      .then((response) => {
        const formattedTasks: Task[] = response.data.map((post, index) => ({
          id: post.id,
          title: post.title,
          description: post.body,
          status: ["Pending", "In Progress", "Completed"][
            index % 3
          ] as Task["status"],
          dueDate: new Date(Date.now() + index * 86400000).toISOString(),
        }));

        setTasks(formattedTasks);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  const updateTaskStatus = (taskId: number, newStatus: Task["status"]) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const filteredTasks = tasks
    .filter((task) =>
      filterStatus === "All" ? true : task.status === filterStatus
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.dueDate.localeCompare(b.dueDate)
        : b.dueDate.localeCompare(a.dueDate)
    );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full h-fit p-6 rounded-lg bg-white shadow-lg">
      <div className="flex justify-between font-semibold mb-4">
        <span className="text-gray-600 flex items-center">
          Task List
          <span className="ml-2 flex items-center justify-center min-w-[40px] h-[40px] px-3 rounded-full bg-gray-200 text-gray-800">
            {filteredTasks.length}
          </span>
        </span>
        <div className="flex gap-4">
          <select
            className="px-3 py-1 border rounded"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button
            className="px-3 py-1 border rounded bg-gray-100"
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          >
            Sort ({sortOrder})
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="p-4 rounded-lg shadow-lg bg-gray-50 cursor-pointer hover:shadow-xl hover:bg-gray-100 transition-all flex flex-col h-full"
            onClick={() => setSelectedTask(task)}
          >
            <div className="flex-1">
              <div className="text-lg font-semibold">{task.title}</div>
              <div className="text-sm text-gray-500">{task.description}</div>
            </div>

            <div className="mt-4 pt-2 border-t flex justify-between items-center">
              <span
                className={`px-2 py-1 rounded ${
                  task.status === "Completed"
                    ? "bg-green-200 text-green-800"
                    : task.status === "In Progress"
                    ? "bg-yellow-200 text-yellow-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {task.status}
              </span>
              <span className="text-gray-600 text-sm">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedTask && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[400px] shadow-xl">
            <h2 className="text-xl font-bold">{selectedTask.title}</h2>
            <p className="text-gray-600 mt-2">{selectedTask.description}</p>
            <p className="mt-2">
              Due Date: {new Date(selectedTask.dueDate).toLocaleDateString()}
            </p>
            <div className="mt-4">
              <label className="block text-sm font-medium">
                Update Status:
              </label>
              <select
                className="w-full mt-1 p-2 border rounded"
                value={selectedTask.status}
                onChange={(e) =>
                  updateTaskStatus(
                    selectedTask.id,
                    e.target.value as Task["status"]
                  )
                }
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setSelectedTask(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingActions;
