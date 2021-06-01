import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";
// import GuestSidebar from "../Guest/GuestSidebar/GuestSidebar";
import { UserContextInquiry } from "../../context/userContextInquiry";

export default class inquirylist extends Component {
  constructor(props) {
    super(props);
    this.state = { user: [] };
  }

  static contextType = UserContextInquiry;

  componentDidMount() {
    axios
      .get("http://localhost:5000/user/inquiry")
      .then((response) => {
        this.setState({
          user:
            this.context.loginDetails.userId == "6059b1c74698b333bc90e1ea"
              ? response.data.data
              : response.data.data.filter(
                  (object) => object.userid == this.context.loginDetails.userId
                ),
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  tabRow() {
    return this.state.user.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <>
        {/* <GuestSidebar /> */}
        {}
        <div
        // className="inquiry-list"
        // style={{ marginLeft: 250, marginTop: 50 }}
        >
          {/* <div className="row">
            <div className="col-md-4"></div> */}

          <div className="col-md-7">
            <br />
            <br />
            <h2 align="left">Inquiry List</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th col>Inquiry Type</th>
                  <th>Reason</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>{this.tabRow()}</tbody>
            </table>
            {/* </div> */}
          </div>
        </div>
      </>
    );
  }
}
