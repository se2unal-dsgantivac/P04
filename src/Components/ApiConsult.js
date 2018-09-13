import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/ApiConsult.css';


class ApiConsult extends Component {

  state = {
    persons: []

  }
  componentDidMount() {
    axios.get(`https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2017-01`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
// category  persistent_id  month location context
  render() {
    return (
      <div className = "maxContainer" >
        { this.state.persons.map(person =>
          <div  className = "container ">
            <p>Category: {person.category}</p>
            <p>Month: {person.month}</p>
            <p>Street name: {person.location.street.name}</p>
          </div>
        )}
      </div>
    )
  }
}

export default ApiConsult;
