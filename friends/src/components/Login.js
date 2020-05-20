import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    //make a Post request and send the credentials object to the API
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then((res) => {
        console.log("RES FROM Login.js:", res);
      })
      .catch((err) => console.log("Login ERROR:", err));
  };

  render() {
    return (
      <div className="wrap-form">
        <form className="form" onSubmit={this.login}>
          <label htmlFor="username" className="label">
            Username:
          </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={this.handleChange}
          />

          <label htmlFor="examplePassword" className="label">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="examplePassword"
            onChange={this.handleChange}
          />

          <button className="btn">Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
