import React, { Component } from "react";
import {connect} from 'react-redux';
import { addUser} from './store/actions';
import AddUserForm from "./Components/AddUserForm";
import User from "./Components/User";
import "./App.css";

export class App extends Component {
 

  addNewUser = newUser => {
    this.props.addUser(newUser)
  };

  render() {
    return (
      <div className="App">
        <div className="form-container">
          <h1>ADD NEW USER</h1>
          <AddUserForm addUser={this.addNewUser} />
        </div>

        <div className="users-container">
          {this.props.users.map((people, index) => {
            return (
              <User
                key={index}
                name={people.name}
                email={people.email}
                gen={people.gen}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = {
  addUser: addUser

}

export default connect(mapStateToProps, mapDispatchToProps)(App);

