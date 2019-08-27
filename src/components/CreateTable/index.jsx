import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Box from "@material-ui/core/Box";

export default class CreateTable extends Component {
  state = {
    users: [],
    userSelected: "",
    title: "",
    concept: "",
    date: new Date()
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({
      users: res.data.map(user => user.username),
      userSelected: res.data[0].username
    });
  }

  onSubmit = async e => {
    e.preventDefault();
    const newTable = {
      title: this.state.title,
      content: this.state.concept,
      date: this.state.date,
      author: this.state.userSelected
    };
    await axios.post("http://localhost:4000/api/groups", newTable);
    window.location.href = "/";
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChangeDate = date => {
    this.setState({ date });
  };

  render() {
    return (
      <div>
        <h4>Create a Table</h4>
        <div>
          <select onChange={this.onInputChange}>
            {this.state.users.map(users => (
              <option key={users._id} value={users}>
                {users.username}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Title"
            title="title"
            onChange={this.onInputChange}
            required
          />
        </div>
        <div>
          <textarea name="concept" placeholder="concept" required></textarea>
        </div>
        <div>
          <DatePicker selected={this.state.date} onChange={this.onChangeDate} />
        </div>
        <form onSubmit={this.onSubmit}>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}
