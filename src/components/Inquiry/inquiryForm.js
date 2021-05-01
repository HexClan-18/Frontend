import React, { Component } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./inquiryCSS/inquiryForm.css";
import { Link } from "react-router-dom";
import axios from "axios";
import GuestSidebar from "../Guest/GuestSidebar/GuestSidebar";

export default class inquiryform extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserId = this.onChangeUserId.bind(this);
    this.onChangeInquiryType = this.onChangeInquiryType.bind(this);
    this.onChangeReason = this.onChangeReason.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      userid: "",
      inquirytype: "",
      reason: "",
      useridError: "",
      inquirytypeError: "",
      reasonError: "",
    };
  }

  onChangeUserId(e) {
    this.setState({
      userid: e.target.value,
    });
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

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      userid: this.state.userid,
      inquirytype: this.state.inquirytype,
      reason: this.state.reason,
    };

    axios
      .post("http://localhost:5000/user/inquiry", obj)
      .then((res) => console.log(res.data));

    alert("successfully added");

    this.setState({
      userid: "",
      inquirytype: " ",
      reason: "",
    });
  }

  render() {
    return (
      <>
        <GuestSidebar />

        {}
        <div style={{ marginLeft: 300 }}>
          {/* <div className="row">
            <div className="col-md-4"></div> */}

          {/* <div className="col-md-7"> */}
          <br />
          <br />
          <h1 align="left">Make an Inquiry</h1>
          <Form onSubmit={this.onSubmit} className="inquiryform">
            <Form.Group as={Row} controlId="formHorizontaluserid">
              <Form.Label column sm={2}>
                User ID
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="userid"
                  placeholder="User ID"
                  value={this.state.userid}
                  onChange={this.onChangeUserId}
                />

                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.useridError}
                </div>
              </Col>
            </Form.Group>
            <br />
            <fieldset>
              <Form.Group as={Row} controlId="formHorizontaluserid">
                <Form.Label as="legend" column sm={2}>
                  Inquiry Type
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="Regarding Accommadation Place Inquiries"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    value={this.state.inquirytype}
                    onChange={this.onChangeInquiryType}
                  />
                  <Form.Check
                    type="radio"
                    label="Regarding System Inquiries"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    value={this.state.inquirytype}
                    onChange={this.onChangeInquiryType}
                  />
                  <Form.Check
                    type="radio"
                    label="Other Inquiries"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    value={this.state.inquirytype}
                    onChange={this.onChangeInquiryType}
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <br />

            <Form.Group as={Row} controlId="formHorizontalreason">
              <Form.Label column sm={2}>
                Reason
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={this.state.reason}
                  onChange={this.onChangeReason}
                />
              </Col>
            </Form.Group>

            <br />
            <br />

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Submit</Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
        {/* </div> */}
        {/* </div> */}
      </>
    );
  }
}
