import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="btnContainer">
        <Row>
          <p> city = {this.props.city}</p>
        </Row>
      </div>
    );
  }
}
