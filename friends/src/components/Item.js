import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function Item(props) {
  const { push } = useHistory();

  return (
    <div>
      {props.friends.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Age: {item.age}</p>
            <p>Email:{item.email}</p>
            <button
              className="md-button"
              onClick={() => push(`/update-item/${item.id}`)}
            >
              Edit
            </button>
            <button
              onClick={() => props.deleteItem(item.id)}
              className="md-button"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
