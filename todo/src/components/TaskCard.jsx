import React from "react";
import "./TaskCard.css";
import "./TaskColumn.css";
import deleteIcon from "../assets/icons8-delete-50.png";
import Tag from "./Tag";

const TaskCard = ({ title, tags, handleDelete, index, setActiveTask }) => {
  return (
    <div>
      <article
        className="task_card "
        draggable
        onDragStart={() => {
          setActiveTask(index);
        }}
        onDragEnd={() => {
          setActiveTask(null);
        }}
      >
        <p className="task_text">{title}</p>
        <div className="task_card_bottom_line">
          <div className="task_tag">
            {tags.map((tag, index) => (
              <Tag key={index} tagName={tag} selected />
            ))}
          </div>
          <div className="task_deleteIcon" onClick={() => handleDelete(index)}>
            <img className="task_icon_delete" src={deleteIcon} alt="" />
          </div>
        </div>
      </article>
    </div>
  );
};

export default TaskCard;
