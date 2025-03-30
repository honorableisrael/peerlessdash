import React, { useState } from "react";
import styled from "styled-components";
import { Task, useTaskContext } from "./TaskContext";
import TaskModal from "./TaskModal";
import SuccessModal from "./SuccessModal";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  margin-bottom: 1rem;
  @media (max-width: 568px) {
    justify-content: center;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
`;

const TaskCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  height: 44px;
  padding: 0 0.6rem;
  border-radius: 50%;
  background: #e5e7eb;
  color: #374151;
`;

const Controls = styled.div`
  display: flex;
  // flex-wrap: wrap;
  gap: 10px;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
  @media (max-width: 568px) {
    justify-content: center;
  }

  select,
  button {
    width: 130px;
    min-width: 90px;
    padding:0rem .8rem;
  }
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const Button = styled.button`
  width: 143px;
  height: 40px;
  border: none;
  color: #5e01d6;
  background: #d7cefb;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: #b8a4f5;
  }
`;

const TaskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const TaskCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  height: 100%;
  &:hover {
    background: #f3f4f6;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const TaskTitle = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
`;

const TaskDescription = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  flex-grow: 1;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const TaskFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 0.5rem;
  border-top: 1px solid #e5e7eb;
  flex-wrap: wrap;
`;

const StatusBadge = styled.span<{
  status: "Completed" | "In Progress" | "Pending";
}>`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ status }) =>
    status === "Completed"
      ? "#065F46"
      : status === "In Progress"
      ? "#92400E"
      : "#9B1C1C"};
  background-color: ${({ status }) =>
    status === "Completed"
      ? "#D1FAE5"
      : status === "In Progress"
      ? "#FEF3C7"
      : "#FECACA"};
`;

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
    <Container>
      <Header>
        <TitleContainer>
          Task List
          <TaskCount>{filteredTasks.length}</TaskCount>
        </TitleContainer>
        <Controls>
          <Select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </Select>
          <Button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          >
            Sort ({sortOrder})
          </Button>
        </Controls>
      </Header>

      <TaskGrid>
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} onClick={() => setSelectedTask(task)}>
            <TaskTitle>{task.title}</TaskTitle>
            <TaskDescription>{task.description}</TaskDescription>
            <TaskFooter>
              <StatusBadge status={task.status}>{task.status}</StatusBadge>
              <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
            </TaskFooter>
          </TaskCard>
        ))}
      </TaskGrid>

      {selectedTask && (
        <TaskModal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onSubmit={handleSubmit}
        />
      )}
      {showSuccessModal && (
        <SuccessModal
          message="Task status updated successfully."
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </Container>
  );
};

export default TaskRecords;
