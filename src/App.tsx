import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import PendingActions from "./components/dashboard/shared/TaskRecords";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* I added the /tasks route for the purpose of showing multiple page routing */}
        <Route path="/tasks" element={<PendingActions />} />
      </Routes>
    </Router>
  );
}

export default App;