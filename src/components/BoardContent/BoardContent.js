import React from "react";
import Column from "../Column/Column";
import "./BoardContent.scss";

function BoardContent() {
  return (
    <div className="board-columns">
      <Column />
      <Column />
      <Column />
    </div>
  );
}

export default BoardContent;
