import { Component } from "react";
import "../styles/work.css";

export class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      work: {
        company: "",
        title: "",
        tasks: "",
        startDate: "",
        endDate: "",
      },
    };

    this.handleChangeCompany = this.handleChangeCompany.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeTasks = this.handleChangeTasks.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.addWork = this.addWork.bind(this);
  }

  populateWork(workArr) {
    return (
      <div>
        {workArr.map((item, index) => (
          <div className="work-item-container">
            <div>Company: {item.company}</div>
            <div>Title: {item.title}</div>
            <div>Tasks: {item.tasks}</div>
            <div>Start Date: {item.startDate}</div>
            <div>End Date: {item.endDate}</div>
            <button onClick={() => this.removeWork(item.company)}>X</button>
          </div>
        ))}
      </div>
    );
  }
  removeWork(company) {
    this.props.removeWork(company);
    // console.log(e);
  }

  addWork() {
    this.props.addWork(this.state.work);
    this.setState({
      work: {
        company: "",
        title: "",
        tasks: "",
        startDate: "",
        endDate: "",
      },
      // console.log(this.state);
    });
  }

  handleChangeCompany(e) {
    this.setState({
      work: {
        ...this.state.work,
        company: e.target.value,
      },
    });
  }

  handleChangeTitle(e) {
    this.setState({
      work: {
        ...this.state.work,
        title: e.target.value,
      },
    });
  }

  handleChangeTasks(e) {
    this.setState({
      work: {
        ...this.state.work,
        tasks: e.target.value,
      },
    });
  }

  handleChangeStartDate(e) {
    this.setState({
      work: {
        ...this.state.work,
        startDate: e.target.value,
      },
    });
  }

  handleChangeEndDate(e) {
    this.setState({
      work: {
        ...this.state.work,
        endDate: e.target.value,
      },
    });
  }

  render() {
    return (
      <div>
        <h2>Work Experience:</h2>
        {this.populateWork(this.props.workArr)}
        <div className="input-container">
          <input
            className="input"
            placeholder="Company"
            onChange={this.handleChangeCompany}
            value={this.state.work.company}
          ></input>
          <input
            className="input"
            placeholder="Title"
            onChange={this.handleChangeTitle}
            value={this.state.work.title}
          ></input>
          <input
            className="input-tasks"
            placeholder="Tasks"
            onChange={this.handleChangeTasks}
            value={this.state.work.tasks}
          ></input>
          <div className="date-container">
            <label>
              Start date:
              <input
                type="date"
                className="date-input"
                onChange={this.handleChangeStartDate}
                value={this.state.work.startDate}
              ></input>
            </label>
            <label>
              Finish date:
              <input
                type="date"
                className="date-input"
                onChange={this.handleChangeEndDate}
                value={this.state.work.endDate}
              ></input>
            </label>
          </div>
        </div>
        <button onClick={this.addWork}>Add Work Experience</button>
      </div>
    );
  }
}
