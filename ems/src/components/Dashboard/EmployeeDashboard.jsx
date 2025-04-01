import React, { useEffect, useState } from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  const [employeeData, setEmployeeData] = useState(props.data);

  const fetchLatestData = () => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.employees) {
      const updatedEmployee = storedData.employees.find(
        (emp) => emp.email === props.data.email
      );
      if (updatedEmployee) {
        setEmployeeData(updatedEmployee);
      }
    }
  };
  
  console.log(employeeData)

  useEffect(() => {
    fetchLatestData(); // Fetch latest data when component mounts
    const interval = setInterval(fetchLatestData, 2000); // Auto-refresh every 2 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  if (!employeeData) return <div>Loading...</div>;

  return (
    <div className="p-20 bg-[#1C1C1C] h-screen">
      <Header data={employeeData} changeUser={props.changeUser} />
      <TaskListNumbers data={employeeData} />
      <TaskList data={employeeData} />
    </div>
  );
};

export default EmployeeDashboard;
