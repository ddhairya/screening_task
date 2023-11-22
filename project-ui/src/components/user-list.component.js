import React, { Component } from "react";
import UserDataService from "../services/user.service";
import { Link } from "react-router-dom";

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.retrieveUsers = this.retrieveUsers.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.state = {
      users: [],
      
    };
  }

  componentDidMount() {
    this.retrieveUsers();
  }

  retrieveUsers() {
    // this.setState({
    //   users: [{'email' : 'dhairya@yahoo.com'},{'email' : 'dhairya@yahoo.com'}]
    // })

    UserDataService.getAll()
      .then(response => {
        this.setState({
          users: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveUsers();
    
  }

  render() {
    const { users } = this.state;

    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>Users List</h4>
          <ul className="list-group">
            {users &&
              users.map((user, index) => (
                <li
                  
                  key={index}
                >
                  {user.email}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
