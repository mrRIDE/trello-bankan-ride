import React, { useEffect, useState } from "react";
import Column from "../Column/Column";
import "./BoardContent.scss";
import { initialData } from "../../actions/initialData";
import { isEmpty, map } from "lodash";
import { mapOrder } from "../../utilities/sort.js";

function BoardContent() {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const boardFromDb = initialData.boards.find(
      (board) => board.id === "board-1"
    );

    if (boardFromDb) {
      boardFromDb.columns.sort(
        (a, b) =>
          boardFromDb.columnOrder.indexOf(a.id) -
          boardFromDb.columnOrder.indexOf(b.id)
      );
      setBoard(boardFromDb);
      setColumns(boardFromDb.columns);
    }
  }, []);

  if (isEmpty(board)) return <div className="not-found">Board not found</div>;

  return (
    <div className="board-columns">
      {columns.map((column, index) => (
        <Column key={index} column={column} />
      ))}
    </div>
  );
}

export default BoardContent;
