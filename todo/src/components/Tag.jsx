import React from "react";
import "./Tag.css";
const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    Html: { backgroundColor: "#fda821" },
    Css: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className="tag"
      onClick={() => {
        selectTag(tagName);
      }}
      style={selected ? tagStyle[tagName] : tagStyle.default}
    >
      {tagName}
    </button>
  );
};

export default Tag;
