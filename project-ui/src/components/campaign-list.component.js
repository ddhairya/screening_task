import React, { Component } from "react";
import CampaignDataService from "../services/campaign.service";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeFrequency = this.onChangeFrequency.bind(this);
    this.saveCampaign = this.saveCampaign.bind(this);
    this.retrieveCampaigns = this.retrieveCampaigns.bind(this);
    this.refreshList = this.refreshList.bind(this);

    this.state = {
      tutorials: [],
      id: null,
      title: "",
      description: "", 
      date: "",
      recursive : false,
      frequency : "Monday",
      published: false,

      submitted: false
    };
  }

  componentDidMount() {
    this.retrieveCampaigns();
  }

 

  retrieveCampaigns() {
    CampaignDataService.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveCampaigns();
    
  }

  newCampaign() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,

      submitted: false
    });
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeDate(e) {
    this.setState({
      date: e.target.value
    });
  }
  onChangeFrequency(e) {
    this.setState({
      recursive: e.target.value
    });
  }
  saveCampaign() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      recursive: this.state.recursive,
    };

    // console.log(data)

    CampaignDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          email: response.data.email,
          password: response.data.password,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const {  tutorials } = this.state;


    return (
      <div className="list row">
        <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>
            <div className="form-group">
              <div htmlFor="date">Date</div>
              <DatePicker
                selected={this.state.date}
                onChange={(date) => this.setState({
                  date: date
                })}
                showTimeSelect
                dateFormat="Pp"
              />
            </div>
            <div className="form-group">
            <label>
              <input type="checkbox"
                defaultChecked={this.state.recursive}
                onChange={() => this.setState({
                  recursive: !this.state.recursive
                })}
              />
             Recursive!
            </label>
            </div>
            { (this.state.recursive) ? (
              <div className="form-group">
              <select value={this.state.frequency} onChange={this.onChangeFrequency}>
                <option value="0">Sunday</option>
                <option value="1">Monday</option>
                <option value="2">Tuesday</option>
                <option value="3">Wednesday</option>
                <option value="4">Thursday</option>
                <option value="5">Friday</option>
                <option value="6">Saturday</option>
              </select>
            </div>
            ) : (
              <div className="form-group">
              
            </div>
            )}

            <button onClick={this.saveCampaign} className="btn btn-success m-5">
              Create
            </button>
            
          </div>

          <div className="col-md-6">
          <h4>Campaigns List</h4>

          <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  key={index}
                >
                  {tutorial.title} - {tutorial.description} - {tutorial.date} - {tutorial.recursive} - {tutorial.frequency} 
                </li>
              ))}
          </ul>

          
        </div>
        
      </div>
    );
  }
}
