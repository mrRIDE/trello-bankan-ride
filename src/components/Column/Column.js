import React from "react";
import Task from "../Task/Task";
import "./Column.scss";

function Column() {
  return (
    <div className="column">
      <header>BrainStorm</header>
      <ul className="task-list">
        <Task />
      </ul>
      <footer>Add another Line</footer>
    </div>
  );
}

export default Column;
