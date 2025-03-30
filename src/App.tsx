import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import PendingActions from "./components/dashboard/shared/TaskRecords";
import { TaskProvider } from "./components/dashboard/shared/TaskContext";

function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<PendingActions />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;