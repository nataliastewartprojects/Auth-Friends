import React from "react";

// import Loader from "react-loader-spinner"
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
        // this.setState({
        //   friends: res.data,
        // });
      })
      .catch((err) => console.log("FRIENDSLIST- ERROR", err));
  };

  render() {
    return <div className="friends-container">Hi from FriendsList</div>;
  }
}

export default FriendsList;
