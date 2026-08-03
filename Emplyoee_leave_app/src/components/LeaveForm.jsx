export const LeaveForm = ({ employee }) => {
  return (
    <div>
      <h2>Leave Request Details</h2>

      <p>Employee Name: {employee.name}</p>
      <p>Department: {employee.department}</p>
      <p>Available Leave Balance: {employee.leaveBalance} days</p>
    </div>
  );
};