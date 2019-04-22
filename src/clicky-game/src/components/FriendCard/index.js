import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
  <div>
    <div className="card" onClick={() => props.clickGame(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  </div>

  );
}

export default FriendCard;
