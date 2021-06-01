import React, { Component } from "react";
import { Button, Form, Row, Col, Card, Container } from "react-bootstrap";
import { UserContextInquiry } from "../../../../context/userContextInquiry";
import axios from "axios";

export default class inquiryform extends Component {
  static contextType = UserContextInquiry;

  constructor(props) {
    super(props);
    this.onChangeInquiryType = this.onChangeInquiryType.bind(this);
    this.onChangeReason = this.onChangeReason.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      userid: "",
      inquirytype: "",
      reason: "",

      inquirytypeError: "",
      reasonError: "",
    };
  }

  componentDidMount() {
    this.setState(() => ({
      userid: this.context.loginDetails.userId,
    }));
  }

  onChangeInquiryType(e) {
    this.setState({
      inquirytype: e.target.value,
    });
  }

  onChangeReason(e) {
    this.setState({
      reason: e.target.value,
    });
  }

  validate = () => {
    let inquirytypeError = "";
    let reasonError = "";

    if (!this.state.inquirytype) {
      inquirytypeError = "You must select one option";
    }

    if (!this.state.reason) {
      reasonError = "You must describe your inquiry";
    }

    if (inquirytypeError || reasonError) {
      this.setState({ inquirytypeError, reasonError });

      return false;
    }
    return true;
  };

  onSubmit = (e) => {
    const isValid = this.validate();
    const obj = {
      userid: this.state.userid,
      inquirytype: this.state.inquirytype,
      reason: this.state.reason,
    };
    if (isValid) {
      axios
        .post("http://localhost:5000/user/inquiry", obj)
        .then((res) => console.log(res.data));

      alert("successfully added");

      this.setState({
        inquirytype: " ",
        reason: "",
      });
    }
  };

  render() {
    return (
      <>
        <Container fluid>
          <Card>
            <Card.Header>
              <Card.Title as="h4">Make an Inquiry</Card.Title>
              <p className="card-category">Report an issue to the owner..</p>
            </Card.Header>
            <Card.Body>
              <Form className="inquiryform">
                <Form.Group as={Row} controlId="formHorizontaluserid">
                  <Col sm={10}></Col>
                </Form.Group>
                <br />
                <fieldset>
                  <Form.Group as={Row} controlId="formHorizontaluserid">
                    <Form.Label
                      as="legend"
                      style={{ fontSize: 17 }}
                      column
                      sm={2}
                    >
                      Inquiry Type <br />
                    </Form.Label>

                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="Regarding Accomadation Places"
                        value="Regarding Accomadation Place Inquiries"
                        checked={
                          this.state.inquirytype ===
                          "Regarding Accomadation Place Inquiries"
                        }
                        onChange={this.onChangeInquiryType}
                      />

                      <Form.Check
                        type="radio"
                        label="Others"
                        value="Other Inquiries"
                        checked={this.state.inquirytype === "Other Inquiries"}
                        onChange={this.onChangeInquiryType}
                      />
                      {this.state.inquirytypeError ? (
                        <div style={{ fontSize: 14, color: "red" }}>
                          {this.state.inquirytypeError}
                        </div>
                      ) : null}
                    </Col>
                  </Form.Group>
                </fieldset>
                <br />
                <Form.Group as={Row} controlId="formHorizontalreason">
                  <Form.Label column sm={2} style={{ fontSize: 17 }}>
                    Reason
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={this.state.reason}
                      onChange={this.onChangeReason}
                    />

                    {this.state.reasonError ? (
                      <div style={{ fontSize: 14, color: "red" }}>
                        {this.state.reasonError}
                      </div>
                    ) : null}
                  </Col>
                </Form.Group>
                <br />
                <br />
                <Form.Group as={Row}>
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button onClick={(e) => this.onSubmit(e)} type="button">
                      Submit
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

{
}
