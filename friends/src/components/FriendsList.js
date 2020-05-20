import React from "react";

// import Loader from "react-loader-spinner"
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Route } from "react-router-dom";
import AddFriend from "./AddFriend";
import Item from "./Item";
// import UpdateForm from "../components/UpdateForm";

class FriendsList extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // const token = window.localStorage.getItem("token");
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        // console.log("FRIENDSLIST RES:", res);
        this.setState({
          friends: res.data,
        });
      })
      .catch((err) => console.log("FRIENDSLIST- ERROR", err));
  };

  deleteItem = (id) => {
    axiosWithAuth()
      .delete(`/api/friends/${id}`)
      .then((res) => {
        console.log("delete-res:", res);
        this.setState({
          friends: res.data,
        });
        this.props.history.push("/protected");
      })
      .catch((err) => console.log("delete error:", err));
  };

  render() {
    console.log("FriendsList- props", this.props);
    return (
      <div className="friends-container">
        <Route component={AddFriend} />
        <Item
          friends={this.state.friends}
          setState={this.setState}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default FriendsList;
