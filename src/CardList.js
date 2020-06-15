import React from "react";
import { robot } from "./Robot";
import Card from "./Card.js";

const CardList = () => {
  return (
    <div>
      {robot.map((user, i) => {
        return (
          <Card
            key={i}
            id={robot[i].id}
            name={robot[i].name}
            email={robot[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
