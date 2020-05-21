import React, { Component } from "react";
import "./style.css";

const styles = {
  transition: "tilesPicBackground",
};

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div>
          <img className="logo" src={this.props.image} alt="logo" />
          <div className="floatText">{this.props.name}</div>
        </div>
      </div>
    );
  }
}

export default Card;
