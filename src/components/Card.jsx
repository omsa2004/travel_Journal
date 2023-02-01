import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img className="cardImg" src={props.imageUrl}></img>
      <div className="cardBody">
        <p>{props.location}</p>
        <h2 className="cardTitle">{props.title}</h2>
        <p>{props.startDate} - {props.endDate}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
