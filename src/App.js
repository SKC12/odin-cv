import { Component } from "react";
import "./styles/App.css";
import { Input } from "./components/Input";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      education: [],
      experience: [],
    };

    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePhone = this.updatePhone.bind(this);
  }

  updateName(e) {
    this.setState({
      name: e.target.value,
    });
    console.log(this.state);
  }

  updateEmail(e) {
    this.setState({
      email: e.target.value,
    });
    console.log(this.state);
  }

  updatePhone(e) {
    this.setState({
      phone: e.target.value,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <div className="input-container">
          <Input category="Name:" cb={this.updateName}></Input>
          <Input category="E-Mail:" cb={this.updateEmail}></Input>
          <Input category="Telephone:" cb={this.updatePhone}></Input>
        </div>
      </div>
    );
  }
}

export default App;
