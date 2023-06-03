import React from "react";
import Avatar from "./Avatar";
import Name from "./Name";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <Name name={props.name} />
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Details detailInfo={props.number} />
        <Details detailInfo={props.mail} />
      </div>
    </div>
  );
}

export default Card;
