import { EmployeeSection } from "./EmployeeSection";

export const Dashboard = ({ employee }) => {
  return (
    <div>
      <EmployeeSection employee={employee} />
    </div>
  );
};