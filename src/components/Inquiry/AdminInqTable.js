import React, { Component } from "react";
import axios from "axios";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.state = { user: [] };
  }

  getInquiryData() {
    axios
      .get("http://localhost:5000/user/inquiry")
      .then((response) => {
        this.setState({ user: response.data.data });
        console.log(response.data.data);
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getInquiryData();
  }

  tabRow() {
    return this.state.user.map(function (object, i) {
      return <TableRow obj={object} value={this.getInquiryData} key={i} />;
    });
  }

  delete() {
    axios
      .delete("http://localhost:5000/user/inquiry/" + this.props.obj._id)
      .then((response) => {
        this.setState({ user: response.data.data });
        alert("Are you sure want to delete..");
        this.tabRow();
      })

      .catch(function (error) {
        console.log(error);
      });
    window.location.reload(true);
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.userid}</td>
        <td>{this.props.obj.inquirytype}</td>
        <td>{this.props.obj.reason}</td>

        <td>
          <button onClick={this.delete} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
