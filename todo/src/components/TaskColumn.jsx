import React from "react";

import "./TaskColumn.css";
import TaskCard from "./TaskCard";
import DropArea from "./DropArea";

const TaskColumn = ({
  title,
  icon,
  status,
  tasks,
  handleDelete,
  setActiveTask,
  onDrop,
}) => {
  return (
    <div>
      <section className="task_Col">
        <h2 className="task_col_heading">
          <img className="task_icon" src={icon} alt="" />
          {title}
        </h2>
        <br />
        <DropArea
          onDrop={() => {
            onDrop(status, 0);
          }}
        />
        {tasks.map(
          (task, index) =>
            task.status === status && (
              <React.Fragment key={index}>
                <TaskCard
                  key={index}
                  title={task.task}
                  tags={task.tags}
                  handleDelete={handleDelete}
                  index={index}
                  setActiveTask={setActiveTask}
                />
                <DropArea
                  onDrop={() => {
                    onDrop(status, index + 1);
                  }}
                />
              </React.Fragment>
            )
        )}
      </section>
    </div>
  );
};

export default TaskColumn;
