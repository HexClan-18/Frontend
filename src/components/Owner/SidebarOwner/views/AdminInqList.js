import React, { Component } from "react";
import axios from "axios";
import AdminTableRow from "../../../Inquiry/AdminInqTable";
import { Card, Container } from "react-bootstrap";

export default class inquirylist extends Component {
  constructor(props) {
    super(props);
    this.state = { user: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/user/inquiry")
      .then((response) => {
        this.setState({ user: response.data.data });

        console.log(response.data);
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  tabRow() {
    return this.state.user.map(function (object, i) {
      return <AdminTableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <>
        <Container fluid>
          <Card>
            <Card.Header>
              <Card.Title as="h4">User Inquiries</Card.Title>
              <p className="card-category">Newest First</p>
            </Card.Header>
            <Card.Body>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Date & Time</th>
                    <th>User Id</th>
                    <th>Inquiry Type</th>
                    <th>More info..</th>
                  </tr>
                </thead>
                <tbody>{this.tabRow()}</tbody>
              </table>
            </Card.Body>
            <Card.Footer>
              <hr></hr>
            </Card.Footer>
          </Card>{" "}
        </Container>
      </>
    );
  }
}
