import { Component } from "react";
import "./styles/App.css";
import { Input } from "./components/Input";
import { Education } from "./components/Education";
import { Work } from "./components/Work";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      education: [],
      experience: [],
      editable: true,
    };

    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePhone = this.updatePhone.bind(this);
    this.addEdu = this.addEdu.bind(this);
    this.removeEdu = this.removeEdu.bind(this);
    this.addWork = this.addWork.bind(this);
    this.removeWork = this.removeWork.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }
  populateComponents() {
    if (this.state.editable) {
      return (
        <div>
          <div className="input-container">
            <h2>Applicant Information:</h2>
            <Input
              category="Name:"
              cb={this.updateName}
              val={this.state.name}
            ></Input>
            <Input
              category="E-Mail:"
              cb={this.updateEmail}
              val={this.state.email}
            ></Input>
            <Input
              category="Telephone:"
              cb={this.updatePhone}
              val={this.state.phone}
            ></Input>
          </div>
          <div className="education-container">
            <Education
              eduArr={this.state.education}
              addEdu={this.addEdu}
              removeEdu={this.removeEdu}
            ></Education>
          </div>
          <div className="work-container">
            <Work
              workArr={this.state.experience}
              addWork={this.addWork}
              removeWork={this.removeWork}
            ></Work>
          </div>
          <div className="save-container">
            <button onClick={this.toggleEdit} className="save-button">
              SAVE
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="input-container">
            <h2>Applicant Information:</h2>
            <p>Name: {this.state.name}</p>
            <p>Email: {this.state.name}</p>
            <p>Telephone: {this.state.phone}</p>
          </div>
          <div className="education-container">
            <div>
              <h2>Education:</h2>
              {this.state.education.map((item, index) => (
                <div className="edu-item-container">
                  <div>Title: {item.name}</div>
                  <div>School: {item.school}</div>
                  <div>Start Date: {item.startDate}</div>
                  <div>End Date: {item.endDate}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="work-container">
            <h2>Work Experience:</h2>
            <div>
              {this.state.experience.map((item, index) => (
                <div className="work-item-container">
                  <div>Company: {item.company}</div>
                  <div>Title: {item.title}</div>
                  <div>Tasks: {item.tasks}</div>
                  <div>Start Date: {item.startDate}</div>
                  <div>End Date: {item.endDate}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="save-container">
            <button onClick={this.toggleEdit} className="save-button">
              EDIT
            </button>
          </div>
        </div>
      );
    }
  }

  toggleEdit() {
    if (this.state.editable) {
      this.setState({
        editable: false,
      });
    } else {
      this.setState({
        editable: true,
      });
    }
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

  addEdu(edu) {
    this.setState({
      education: [...this.state.education, edu],
    });
  }

  addWork(work) {
    this.setState({
      experience: [...this.state.experience, work],
    });
  }

  removeEdu(edu) {
    let filteredArr = this.state.education.filter((item) => {
      return item.name !== edu;
    });
    this.setState({
      education: filteredArr,
    });
  }

  removeWork(work) {
    let filteredArr = this.state.experience.filter((item) => {
      return item.company !== work;
    });
    this.setState({
      experience: filteredArr,
    });
  }

  render() {
    return <div className="App">{this.populateComponents()}</div>;
  }
}

export default App;
