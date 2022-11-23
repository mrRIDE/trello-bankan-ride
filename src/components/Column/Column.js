import { map } from "lodash";
import React from "react";
import { mapOrder } from "../../utilities/sort";
import Card from "../Card/Card";
import "./Column.scss";

function Column({ column }) {
  const cards = mapOrder(column.cards, column.cardOrder, "id");

  return (
    <div className="column">
      <header>{column.title}</header>
      <ul className="card-list">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </ul>
      <footer>Add another Line</footer>
    </div>
  );
}

export default Column;
