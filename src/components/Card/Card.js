import React from "react";
import "./Card.scss";

function Card({ card }) {
  return (
    <li className="card-item">
      {card.avatar && (
        <img src={card.avatar} className="card-avatar" alt="than-thanh-img" />
      )}
      Title : {card.title}
    </li>
  );
}

export default Card;
