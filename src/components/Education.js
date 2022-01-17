import { Component } from "react";
import "../styles/education.css";

export class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edu: {
        name: "",
        school: "",
        startDate: "",
        endDate: "",
      },
      eduPanel: false,
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSchool = this.handleChangeSchool.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.addEducation = this.addEducation.bind(this);
  }

  populateEdu(eduArr) {
    return (
      <div>
        {eduArr.map((item, index) => (
          <div className="edu-item-container">
            <div>Title: {item.name}</div>
            <div>School: {item.school}</div>
            <div>Start Date: {item.startDate}</div>
            <div>End Date: {item.endDate}</div>
            <button onClick={() => this.removeEducation(item.name)}>X</button>
          </div>
        ))}
      </div>
    );
  }
  removeEducation(name) {
    this.props.removeEdu(name);
    // console.log(e);
  }

  addEducation() {
    this.props.addEdu(this.state.edu);
    this.setState({
      edu: {
        name: "",
        school: "",
        startDate: "",
        endDate: "",
      },
    });
    // console.log(this.state);
  }

  handleChangeName(e) {
    this.setState({
      edu: {
        ...this.state.edu,
        name: e.target.value,
      },
    });
  }

  handleChangeSchool(e) {
    this.setState({
      edu: {
        ...this.state.edu,
        school: e.target.value,
      },
    });
  }

  handleChangeStartDate(e) {
    this.setState({
      edu: {
        ...this.state.edu,
        startDate: e.target.value,
      },
    });
  }

  handleChangeEndDate(e) {
    this.setState({
      edu: {
        ...this.state.edu,
        endDate: e.target.value,
      },
    });
  }

  render() {
    return (
      <div>
        <h2>Education:</h2>
        {this.populateEdu(this.props.eduArr)}
        <div className="input-container">
          <input
            className="input"
            placeholder="Title"
            onChange={this.handleChangeName}
            value={this.state.edu.name}
          ></input>
          <input
            className="input"
            placeholder="School"
            onChange={this.handleChangeSchool}
            value={this.state.edu.school}
          ></input>
          <div className="date-container">
            <label>
              Start date:
              <input
                type="date"
                className="date-input"
                onChange={this.handleChangeStartDate}
                value={this.state.edu.startDate}
              ></input>
            </label>
            <label>
              Finish date:
              <input
                type="date"
                className="date-input"
                onChange={this.handleChangeEndDate}
                value={this.state.edu.endDate}
              ></input>
            </label>
          </div>
        </div>
        <button onClick={this.addEducation}>Add Education</button>
      </div>
    );
  }
}
