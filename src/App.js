import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />.
        <div class="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;