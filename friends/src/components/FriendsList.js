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
        console.log("FRIENDSLIST RES:", res);
        this.setState({
          friends: res.data,
        });
      })
      .catch((err) => console.log("FRIENDSLIST- ERROR", err));
  };

  render() {
    return (
      <div className="friends-container">
        <Route component={AddFriend} />
        <Item friends={this.state.friends} />
        {/* <Route
          path="/update-item/:id"
          component={UpdateForm}
          friends={this.state.friends}
          setState={this.setState}
        /> */}
      </div>
    );
  }
}

export default FriendsList;
