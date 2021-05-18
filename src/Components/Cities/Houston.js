import React, { Component } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

export default class Houston extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houstonshirts: [],
    };
    this.populatehoustonshirts = this.populatehoustonshirts.bind(this);
  }
  populatehoustonshirts() {
    this.state.houstonshirts = this.props.houstonshirtscitylevel;
  }

  render() {
    this.populatehoustonshirts();
    {
      console.log(this.state.houstonshirts);
    }
    let images;
    return (
      <Container>
        <Row>
        
          
            {this.state.houstonshirts.map((shirt, id) => (
              <Col key={id} className="shirtCol">
                <h3 className="title">{shirt.title}</h3>
                <Row>
                  <Container>
                    <img
                      className="img"
                      src={shirt.images[0].src}
                      alt="Shirt"
                    />
                  </Container>
                  </Row>
                  <Row>{shirt.description}</Row>
                
                
              </Col>
            ))}

        </Row>
      </Container>
    );
  }
}
