import { Dashboard } from "./components/Dashboard";

function App() {
  const employee = {
    name: "Rahul Sharma",
    department: "Engineering",
    leaveBalance: 12,
  };

  return (
    <div>
      <h1>Employee Leave Request App</h1>
      <Dashboard employee={employee} />
    </div>
  );
}

export default App;