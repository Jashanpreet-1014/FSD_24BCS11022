import { LeaveForm } from "./LeaveForm";

export const EmployeeSection = ({ employee }) => {
  return (
    <div>
      <LeaveForm employee={employee} />
    </div>
  );
};