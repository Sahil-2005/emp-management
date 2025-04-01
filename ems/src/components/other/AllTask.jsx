import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="bg-[#1C1C1C] p-5 rounded mt-5">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded mt-5">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed Task</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>

      <div>
        {userData.employees.map((employee, idx) => (
          <div key={idx} className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded mt-5">
            <h2 className="text-lg font-medium w-1/5">{employee.firstName}</h2>
            <h3 className="text-lg font-medium w-1/5 text-blue-600">
              {employee.taskNumbers?.newTask ?? 0}
            </h3>
            <h5 className="text-lg font-medium w-1/5 text-yellow-400">
              {employee.taskNumbers?.active ?? 0}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-green-600">
              {employee.taskNumbers?.completed ?? 0}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-red-600">
              {employee.taskNumbers?.failed ?? 0}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
