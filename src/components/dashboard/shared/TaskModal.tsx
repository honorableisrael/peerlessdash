import React, { useState } from "react";
import { motion } from "framer-motion";

interface Task {
  id: number;
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
  dueDate: string;
}

interface TaskModalProps {
  task: Task;
  onClose: () => void;
  onSubmit: (status: Task["status"]) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ task, onClose, onSubmit }) => {
  const [selectedStatus, setSelectedStatus] = useState<Task["status"]>(task.status);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white p-6 rounded-lg w-[450px] shadow-xl text-center"
      >
        <h2 className="text-xl font-bold">{task.title}</h2>
        <p className="text-gray-600 mt-2">{task.description}</p>

        <div className="mt-4">
          <label className="block text-sm font-medium">Update Status:</label>
          <select
            className="w-full mt-2 p-2 border rounded"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as Task["status"])}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="flex justify-end mt-4 gap-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-all"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
            onClick={() => onSubmit(selectedStatus)}
          >
            Submit
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default TaskModal;