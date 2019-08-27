import React, { Component } from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";

export default class CreateUser extends Component {
  state = {
    username: ""
  };

  getUsers = async () => {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({ users: res.data });
  };
  async componentDidMount() {
    this.getUsers();
    console.log(this.state.users);
  }

  onChangeUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/users", {
      username: this.state.username
    });
    this.setState({ username: "" });
    this.getUsers();
  };

  render() {
    return (
      <div>
        <Box color="white" bgcolor="palevioletred" p={4}>
          <form className="form1" action="" onSubmit={this.onSubmit}>
            <input
              id="input"
              type="text"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
            <button type="submit">Save</button>
          </form>
        </Box>
      </div>
    );
  }
}
