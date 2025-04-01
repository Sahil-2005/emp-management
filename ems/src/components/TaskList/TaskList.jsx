import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  if (!data || !data.tasks || data.tasks.length === 0) return null; // Prevents errors when no tasks exist

  return (
    <div
      id="TaskList"
      className="h-[55%] mt-10 overflow-x-auto py-5 w-full flex items-center justify-start gap-5"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) return <AcceptTask key={idx} data={elem} />;
        if (elem.newTask) return <NewTask key={idx} data = {elem} />;
        if (elem.completed) return <CompleteTask key={idx} data={elem} />;
        if (elem.failed) return <FailedTask key={idx} data={elem} />;
        return null; // Ensures every condition has a return
      })}
    </div>
  );
};

export default TaskList;
