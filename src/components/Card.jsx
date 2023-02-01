import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img className="cardImg" src={props.imageUrl}></img>
      <div className="cardBody">
        <p className="cardloc"><img src="Images/locationicon.png"></img> {props.location}</p>
        <h2 className="y">{props.title}</h2>
        <p className="cardDate">{props.startDate} - {props.endDate}</p>
        <p className="cardDec">{props.description}</p>
      </div>
    </div>
  );
}
