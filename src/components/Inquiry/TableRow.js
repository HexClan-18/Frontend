import React, { Component } from "react";
import { Button, Dropdown, ButtonGroup, Card } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import inquiryAction from "./inquiryAction";
import { CgWindows } from "react-icons/cg";
import { AiFillWarning } from "react-icons/ai";

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
        //console.log(response.data.data);
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
    alert("Are you sure want to delete this inquiry?");

    axios
      .delete("http://localhost:5000/user/inquiry/" + this.props.obj._id)
      .then((response) => {
        window.location.reload();

        //this.setState({ user: response.data.data });

        this.getInquiryData();
        console.log(response);
        this.tabRow();
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.createdAt}</td>
        <td>{this.props.obj.inquirytype}</td>

        <td>
          <Dropdown as={ButtonGroup}>
            <Button variant="success">View Reason</Button>

            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
            />
            <Dropdown.Menu>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Text>{this.props.obj.reason}</Card.Text>
                </Card.Body>
              </Card>

              <td>
                <Dropdown.Item>
                  <tr>
                    <td>
                      <button onClick={this.delete} className="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                </Dropdown.Item>
              </td>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  }
}

export default TableRow;
