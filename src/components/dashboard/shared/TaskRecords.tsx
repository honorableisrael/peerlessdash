import React, { useState } from "react";
import { Task, useTaskContext } from "./TaskContext";
import TaskModal from "./TaskModal";
import SuccessModal from "./SuccessModal";

const TaskRecords: React.FC = () => {
  const { tasks, loading, error, updateTaskStatus } = useTaskContext();

  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const handleSubmit = async (updatedStatus: Task["status"]) => {
    if (selectedTask) {
      await updateTaskStatus(selectedTask.id, updatedStatus);
      setShowSuccessModal(true);
      setSelectedTask(null);
    }
  };

  const filteredTasks = tasks
    .filter((task) => (filterStatus === "All" ? true : task.status === filterStatus))
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.dueDate.localeCompare(b.dueDate)
        : b.dueDate.localeCompare(a.dueDate)
    );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full h-fit p-6 rounded-lg bg-white shadow-lg">
      <div className="flex flex-wrap items-center justify-between font-semibold mb-4">
        <div className="w-full sm:w-auto flex justify-between sm:justify-start items-center mb-2 sm:mb-0">
          <span className="text-gray-600 flex items-center">
            Task List
            <span className="ml-2 flex items-center justify-center min-w-[40px] h-[40px] px-3 rounded-full bg-gray-200 text-gray-800">
              {filteredTasks.length}
            </span>
          </span>
        </div>

        <div className="w-full sm:w-auto flex gap-4 justify-start sm:justify-end">
          <select
            className="px-3 py-1 border rounded w-full sm:w-auto"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button
            className="w-[143px] h-[40px] border-none text-[#5E01D6] bg-[#D7CEFB] flex items-center justify-center px-5 sm:px-3 rounded-[6px] font-semibold whitespace-nowrap min-w-max flex-nowrap"
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
        <TaskModal task={selectedTask} onClose={() => setSelectedTask(null)} onSubmit={handleSubmit} />
      )}

      {showSuccessModal && (
        <SuccessModal message="Task status updated successfully." onClose={() => setShowSuccessModal(false)} />
      )}
    </div>
  );
};

export default TaskRecords;