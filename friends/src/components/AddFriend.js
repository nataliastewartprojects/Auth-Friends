import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
  //   constructor() {
  //     super();
  state = {
    newFriend: {
      name: "",
      age: "",
      email: "",
    },
  };
  //   }

  handleChange = (e) => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value,
      },
    });
  };

  addFriend = (e) => {
    axiosWithAuth()
      .post("/api/friends", this.state.newFriend)
      .then((res) => {
        // console.log("NEWFRIEND PROPS", props);
        this.setState({
          newFriend: {
            ...this.state.newFriend,
          },
        });
        this.props.history.push("/friends", res.data);
      })
      .catch((err) => {
        console.log("Error NEWFRIEND", err);
      });
  };

  render() {
    return (
      <form onSubmit={this.addFriend} className="addForm">
        <h2>Add a new Friend</h2>
        <label htmlFor="name" className="label">
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={this.state.newFriend.name}
          onChange={this.handleChange}
        />
        <label htmlFor="age" className="label">
          Age:
        </label>
        <input
          type="text"
          name="age"
          value={this.state.newFriend.age}
          onChange={this.handleChange}
        />
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          text="type"
          name="email"
          value={this.state.newFriend.email}
          onChange={this.handleChange}
        />
        <button className="add-btn" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default AddFriend;
