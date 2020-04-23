import React from "react";
import axios from "axios";
import Login from "../login";
import ReactDOM from 'react-dom';
import './createuser.css';
import Main from './main'

export default class Deleteuser extends React.Component {
  state = {
    username: "",

  };
  change = (e) => {
    console.log("check e.target.name", e.target.name)
    console.log("check e.target.value", e.target.value)
    // this.props.onChange({ [e.target.name]: (e.target.value) });
    console.log(".....");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = async (e) => {
    console.log("onSubmit state", this.state.username);
    e.preventDefault();
    // debugger
    if (this.state.username === "" || this.state.username === null || !this.state.username) {
      alert("please enter username")
      return
    }

    axios.delete('http://127.0.0.1:3000/delete/' + this.state.username)
      .then(function (result) {
        console.log('result', result.data)
        if (result.data === "No record found with this ID") {
          alert("No record found")

        } else if (result.data === "you are not authorized") {
          alert("you are not authorized")
          ReactDOM.render(<Login />, document.getElementById('root'));
        }
        else {
          alert("customer deleted successfully")
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  render() {
    return (
      <div>
        <button onClick={(e) => ReactDOM.render(<Main />, document.getElementById('root'))
        }>Home</button>
        <form>


          <br />
          <br />
          <label>username :
        <input type="text" name="username" placeholder="Enter Username" value={this.state.username}
              onChange={(e) => this.change(e)}
            />
          </label>
          <br />

          <button onClick={(e) => this.onSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  }
}
