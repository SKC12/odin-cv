import { Component } from "react";
import "../styles/input.css";

export class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input
          className="input"
          placeholder={this.props.category}
          onChange={this.props.cb}
        ></input>
      </div>
    );
  }
}
