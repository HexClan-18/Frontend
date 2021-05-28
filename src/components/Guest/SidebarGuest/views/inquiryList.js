import React, { Component } from "react";
import axios from "axios";
import TableRow from "../../../Inquiry/TableRow";
import { UserContextInquiry } from "../../../../context/userContextInquiry";
import { Card, Container } from "react-bootstrap";

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
            this.context.loginDetails.userId === "6059b1c74698b333bc90e1ea"
              ? response.data.data
              : response.data.data.filter(
                  (object) => object.userid === this.context.loginDetails.userId
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
        <Container fluid>
          <Card>
            <Card.Header>
              <Card.Title as="h4">My Inquiries</Card.Title>
              <p className="card-category">Inquiries made by you</p>
            </Card.Header>
            <Card.Body>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th></th>
                    <th>Inquiry Type</th>
                    <th>Reason</th>
                    <th colSpan="2">Action</th>
                  </tr>
                </thead>
                <tbody>{this.tabRow()}</tbody>
              </table>
            </Card.Body>
            <Card.Footer>
              <hr></hr>
              <div className="stats">
                <i className="fas fa-history"></i>
                Updated 1 minute ago
              </div>
            </Card.Footer>
          </Card>{" "}
        </Container>
      </>
    );
  }
}
