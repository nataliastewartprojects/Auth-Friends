import React from "react";

export default function Login() {
  return (
    <div className="wrap-form">
      <form className="form">
        <label for="exampleEmail" className="label">
          Email:
        </label>
        <input type="email" name="email" id="exampleEmail" />

        <label for="examplePassword" className="label">
          Password:
        </label>
        <input type="password" name="password" id="examplePassword" />

        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
