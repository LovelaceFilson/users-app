import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, deleteUser, editUser, getAllUsers } from './store/actions';
import UsersForm from './Components/UsersForm';
import User from './Components/User';

export class App extends Component {
  addNewUser = (newUser) => {
    this.props.addUser(newUser);
  };

  deleteUser = (user_id) => {
    this.props.deleteUser(user_id);
  };

  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.props.logoutUser}>Logout</button>
        <UsersForm addUser={this.addNewUser} />
        <div className="App__user">
          {this.props.users.map((people) => {
            return (
              <User
                key={people.id}
                id={people.id}
                name={people.name}
                email={people.email}
                gen={people.gen}
                removeUser={this.deleteUser}
              />
            );
          })} 
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.usersState.users,
  };
};

const mapDispatchToProps = {
  addUser: addUser,
  deleteUser: deleteUser,
  editUser: editUser,
  getAllUsers: getAllUsers,
  

};


export default connect(mapStateToProps, mapDispatchToProps)(App);
