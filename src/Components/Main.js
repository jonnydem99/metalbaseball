import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Body from "./Body";
import LinkContainer from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "none",
    };
    this.changeCity = this.changeCity.bind(this);
  }
  
  changeCity(city) {
    this.setState({ city: city });
    console.log("city = " + this.state.city);
    console.log(this.props.houstonshirtsmainlevel);
  }

  render() {
    return (
      /*
      <Dropdown>
  <DropdownToggle caret color="primary">
    Material dropdown
  </DropdownToggle>
  <DropdownMenu>
    <NavLink to="/link_to_somewhere">
      <DropdownItem>Link</DropdownItem>
    </NavLink>
  </DropdownMenu>
</Dropdown>
*/

      <Container fluid>
        <Row xs={12} className="btnContainer">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Where does your team play?
            </Dropdown.Toggle>

            <Dropdown.Menu>
              
                <Dropdown.Item
                href="#"
                onClick={() => this.changeCity("Arizona")}
              >
                <Link to="/arizona">Arizona</Link>
                
              </Dropdown.Item>
              

              <Dropdown.Item
                href="#"
                onClick={() => this.changeCity("Atlanta")}
              >
                <Link to="/atlanta">Atlanta</Link>
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                onClick={() => this.changeCity("Baltimore")}
              >
                <Link to="/baltimore">Baltimore</Link>
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                onClick={() => this.changeCity("Houston")}
              >
                <Link to="/houston">Houston</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Row>
        <Row xs={12} className="btnContainer">
          <Body city={this.state.city} />
        </Row>
      </Container>
    );
  }
}
