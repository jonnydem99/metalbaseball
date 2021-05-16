import React, { Component } from "react";

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
      <div>
        <p>This is the Houston page, bitches.</p>
        <div className="shirts">
          {this.state.houstonshirts.map((shirt, id) => (
            <div key={id}>
              <h3>{shirt.title}</h3>
              <img
                src={shirt.images[0].src}
                alt="Shirt"
                width="500"
                height="600"
              ></img>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
