import { map } from "lodash";
import React from "react";
import { mapOrder } from "../../utilities/sort";
import Card from "../Card/Card";
import "./Column.scss";
import { Container, Draggable } from "react-smooth-dnd";

function Column({ column }) {
  const cards = mapOrder(column.cards, column.cardOrder, "id");

  const onCardDrop = (onDropResults) => {
    console.log(onDropResults);
  };

  return (
    <div className="column">
      <header className="column-drag-handle">{column.title}</header>
      <div className="card-list">
        <Container
          groupName="col"
          //   onDragStart={(e) => console.log("drag started", e)}
          //   onDragEnd={(e) => console.log("drag end", e)}
          //   onDragEnter={() => {
          //     console.log("drag enter:", column.id);
          //   }}
          //   onDragLeave={() => {
          //     console.log("drag leave:", column.id);
          //   }}
          //   onDropReady={(p) => console.log("Drop ready: ", p)}
          onDrop={(e) => onCardDrop()}
          getChildPayload={(index) => cards[index]}
          dragClass="card-ghost"
          dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: "card-drop-preview",
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map((card, index) => (
            <Draggable key={index}>
              <Card card={card} />
            </Draggable>
          ))}
        </Container>
      </div>
      <footer>Add another Line</footer>
    </div>
  );
}

export default Column;
