import React, { Component } from "react";
import axios from "axios";
import TableRow from "../../../Inquiry/TableRow";
import { UserContext } from "../../../../context/userContext";
import { Card, Container } from "react-bootstrap";

export default class inquirylist extends Component {
  constructor(props) {
    super(props);
    this.state = { user: [] };
  }

  static contextType = UserContext;

  componentDidMount() {
    axios
      .get("/user/inquiry")
      .then((response) => {
        console.log(response);
        this.setState({
          user: response.data.data.filter(
            (object) => object.userid == this.context.loginDetails._id
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
              <p className="card-category">Inquiries that you submitted</p>
            </Card.Header>
            <Card.Body>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Date and Time</th>
                    <th>Inquiry Type</th>

                    <th colSpan="2">More info..</th>
                  </tr>
                </thead>
                <tbody>{this.tabRow()}</tbody>
              </table>
            </Card.Body>
          </Card>{" "}
        </Container>
      </>
    );
  }
}
