import React from "react";
import axios from "axios";
import Login from "../login";
import ReactDOM from 'react-dom';

export default class Main extends React.Component {
    add() {
        // window.open("createuser.html", "_blank");
    }

    update() {
        // window.open("updateuser.html", "_blank");
    }
    readone() {

    }
    readall() {

    }
    deleteCustomer() {

    }
    displayList(data, i) {

    }

    render() {
        return (
            <div>
                <div>
                    <h1>Welcome to Service Mitra</h1>
                    <h4>by Lalakishop</h4>
                    <nav>
                        <button onClick={this.add}> ADD</button>
                        <button onClick={this.update}>UPDATE</button>
                        <button onClick={this.deleteCustomer}>DELETE</button>
                        <button onClick={this.readall}>REFRESH</button>

                        <label>Mobile</label>
                        <input type="text" name="iduser" placeholder="Enter Mobile or USERNAME" />
                        <button onClick={this.readone}>SEARCH</button>

                    </nav>

                </div>

                <div>

                    <h2 id="ncustomers">All customers list</h2>

                    <div id="mainframe" />

                    <table id="mainTable" class="mTable">
                        <tr>
                            <th>Serial No.</th>
                            <th>UserName</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Description</th>
                            <th>Extras</th>
                            <th>created_date</th>
                            <th>modified_date</th>
                            <th>Products</th>

                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}
