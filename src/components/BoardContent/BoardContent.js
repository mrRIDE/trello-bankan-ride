import React, { useEffect, useState } from "react";
import Column from "../Column/Column";
import "./BoardContent.scss";
import { initialData } from "../../actions/initialData";
import { isEmpty, map } from "lodash";
import { mapOrder } from "../../utilities/sort.js";
import { Container, Draggable } from "react-smooth-dnd";

function BoardContent() {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);

  const onColumnDrop = (dropResults) => {
    console.log(dropResults);
  };

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
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        getChildPayload={(index) => columns[index]}
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: "column-drop-preview",
        }}
      >
        {columns.map((column, index) => (
          <Draggable key={index}>
            <Column column={column} />
          </Draggable>
        ))}
      </Container>
    </div>
  );
}

export default BoardContent;
