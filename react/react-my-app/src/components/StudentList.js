import React from "react";
import axios from "axios";
import DeleteStudent from "./DeleteStudent";

class UserList extends React.Component {
  state = {
    users: []
  };

  render() {
    return (
      <>
        {this.state.users.map((usr) => {
          return (
            <>
              <label>{usr.name}</label>
              <br />
              <DeleteStudent id={usr.id}/>
            </>
          );
        })}
      </>
    );
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      this.setState({ users: [...res.data] });
    });
  }
}

export default UserList;