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
    return (
      <Container>
        <Container className="shirts">
          <Col>
            {this.state.houstonshirts.map((shirt, id) => (
              <Container key={id}>
                <h3>{shirt.title}</h3>
                <Row>
                  <Container className="fillimgspace">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={shirt.images[0].src}
                        alt="Shirt"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={shirt.images[3].src}
                        alt="Shirt 2"
                      />
                    </Carousel.Item>
                  </Carousel>
                  </Container>
                  <Row>{shirt.description}</Row>
                </Row>
              </Container>
            ))}
          </Col>
        </Container>
      </Container>
    );
  }
}
