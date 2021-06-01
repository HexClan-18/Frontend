import React, { Component, useState, useEffect } from "react";
import { Button, Dropdown, ButtonGroup, Card } from "react-bootstrap";
import axios from "axios";

class TableRow extends Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
    this.state = {
      user: [],
    };
  }

  getInquiryData() {
    axios
      .get("http://localhost:5000/user/inquiry")
      .then((response) => {
        this.setState({ user: response.data.data });
        console.log(this.state.user);

        const x = response.data.data.length;
        var i = 0;
        for (i = 0; i < x; i++) {
          this.state.user[i].date = this.state.user[i].createdAt.split("T")[0];
          console.log(this.state.user[i].date);
        }
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
        // window.location.reload();

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
        <td width="30px">{this.props.obj.createdAt}</td>
        <td>{this.props.obj.userid}</td>
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
              <Card style={{ width: "20rem" }}>
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

                      <button onClick={this.reply} className="btn btn-primary">
                        Reply
                      </button>

                      <button
                        onClick={this.forward}
                        className="btn btn-primary"
                      >
                        Forward
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
