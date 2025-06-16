import React, { useState } from "react";
import "./Header.css";
import Tag from "./Tag";

const Header = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "Todo",
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "Todo",
      tags: [],
    });
  };

  const selectTag = (tagName) => {
    if (taskData.tags.some((item) => item === tagName)) {
      const filterTags = taskData.tags.filter((item) => item !== tagName);

      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tagName] };
      });
    }
  };

  const selected = (tagName) => {
    return taskData.tags.some((item) => item === tagName);
  };
  return (
    <div className="app_header">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your Task"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="Html"
              selectTag={selectTag}
              selected={selected("Html")}
            />
            <Tag
              tagName="Css"
              selectTag={selectTag}
              selected={selected("Css")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={selected("JavaScript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={selected("React")}
            />
          </div>
          <div>
            <select
              className="task_status"
              name="status"
              value={taskData.status}
              onChange={handleChange}
            >
              <option value="Todo">To do</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
            <button className="task_submit">+ Add Task</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Header;
