import React from "react";

export default function Item(props) {
  return (
    <div>
      {props.friends.map((item) => {
        return (
          <div>
            <h3>{item.name}</h3>
            <p>Age: {item.age}</p>
            <p>Email:{item.email}</p>
          </div>
        );
      })}
    </div>
  );
}
