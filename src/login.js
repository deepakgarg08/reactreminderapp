import React from "react";
import Createuser from "../src/pages/createuser";
import ReactDOM from 'react-dom';


export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };
  change = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value });
    console.log(".....");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = async (e) => {
    console.log("onsubmit fired", e);
    console.log("onsubmit state", this.state);
    e.preventDefault();
    // this.sendJsonToDatabase(this.state);

    let fetchresult = await fetch("http://127.0.0.1:3000/authenticate", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then(async (result) => {
        let res = await result.json();
        console.log("check result", res);
        return res;
      })
      .catch((error) => console.log("check error", error));
    console.log("fetchresult", fetchresult);
    if (fetchresult.output === "user authenticated") {
      alert("user authenticated successfully");
      ReactDOM.render(<Createuser />, document.getElementById('root'));
    } else {
      // auth.innerHTML = "wrong username or password";
      alert("wrong username or password");
    }
    // this.props.onSubmit(this.state);
    // this.setState({
    //   username: "",
    //   password: ""
    // });
    // this.props.onChange({
    //   username: "",
    //   password: ""
    // });
  };

  render() {
    return (
      <form>
        <label>
          username :
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            // value="dkadmin"
            onChange={(e) => this.change(e)}
          />
        </label>
        <br />
        <label>
          password :
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            // value="ohhyeah!"

            onChange={(e) => this.change(e)}
          />
        </label>
        <br />
        <button onClick={(e) => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
