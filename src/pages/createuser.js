import React from "react";
import axios from "axios";
import Login from "../login";
import ReactDOM from 'react-dom';
import './createuser.css';

export default class Createuser extends React.Component {
  state = {
    username: "",
    name: "",
    mobile: "",
    address: "",
    extras: "",
  };
  change = (e) => {
    console.log("check e.target.name", e.target.name)
    console.log("check e.target.value", e.target.value)
    this.props.onChange({ [e.target.name]: (e.target.value) });
    console.log(".....");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = async (e) => {
    console.log("onsubmit fired", e);
    console.log("Createuser state", this.state);
    e.preventDefault();
    // debugger
    if (this.state.username === "" || this.state.username === null || !this.state.username) {
      alert("please enter username")
      return
    }

    if (this.state.name === "" || this.state.name === null || !this.state.name) {
      alert("please enter name")
      return
    }

    if ((this.state.mobile === "" || this.state.mobile === null || !this.state.mobile) || this.state.mobile.length !== 10) {
      alert("please enter correct mobile number")
      return
    }
    if (this.state.address === "" || this.state.address === null || !this.state.address) {
      alert("please enter address")
      return
    }

    axios.post('http://127.0.0.1:3000/new', this.state)
      .then(function (result) {
        if (result.data === "username already exist") {
          alert("username already exist")

          // window.location.reload()
        } else if (result.data === "you are not authorized") {
          alert("you are not authorized")
          ReactDOM.render(<Login />, document.getElementById('root'));

          // window.location.href = "index.html"
        }
        else {
          alert("customer created successfully")
          // ReactDOM.render(<Main />, document.getElementById('root'));
          ReactDOM.render(<Login />, document.getElementById('root'));

          // window.location.href = "main.html"
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  render() {
    return (
      <form>
        <label>
          username :
          <input
            name="username"
            placeholder="Username"
            value={this.state.username}
            // value="dkadmin"
            onChange={(e) => this.change(e)}
          />
        </label>
        <br />
        <label>
          name :
          <input
            name="name"
            type="text"
            placeholder="name"
            value={this.state.name}
            // value="ohhyeah!"
            onChange={(e) => this.change(e)}
          />
        </label>
        <br />
        <label>
          mobile :
          <input
            type="text"
          
            name="mobile"
            placeholder="mobile"
            value={this.state.mobile}
            // value="dkadmin"
            onChange={(e) => this.change(e)}
          />
        </label>
        <br />
        <label>
          address :
          <input
            type="text"
          
            name="address"
            placeholder="address"
            value={this.state.address}
            // value="dkadmin"
            onChange={(e) => this.change(e)}
          />
        </label>
        <br />
        <label>
          extras :
          <input
            name="extras"
            type="text"
            placeholder="extras"
            value={this.state.extras}
            // value="dkadmin"
            onChange={(e) => this.change(e)}
          />
        </label>
        <br />
        <button onClick={(e) => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
