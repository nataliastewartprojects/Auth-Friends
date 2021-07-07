import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//components
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import UpdateForm from "./components/UpdateForm";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <img
            className="emoji"
            src="https://png2.cleanpng.com/sh/f453cf734537c300a774c12924901550/L0KzQYm3V8E1N6VthJH0aYP2gLBuTgNucZ1qkZ99aIXwcn76ifdvaZ0yfd94dHnmf7A0gBxqeF5miuY2c33sfMq0VfI1QWk5fKpsM3PkQoS1U8A4PmE1Sas6NUO0RYW7V8kzQGE3RuJ3Zx==/kisspng-smiley-thumb-signal-emoticon-clip-art-smily-5b4984d8c3ca23.307600191531544792802.png"
            alt="emoji"
          />
          <h2>F R I E N D S </h2>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Friends List</Link>
          </li>
        </ul>

        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          {/* <Route component={Login} /> */}
          <Route path="/update-item/:id" component={UpdateForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
