import React, { Component } from "react";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          city: 0,
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        setTimeout(() => {
          this.setState((prevState) => {
            return {
              level: prevState.level + 1,
            };
          });
        }, 1000);
        console.log("level = " + this.state.level);
      }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}
