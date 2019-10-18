/*
 * Main app component
 */

/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './App.css';


/* Component imports */


/* App component */
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      lastname: '',
      firstname: '',
      message: ''
    }
  }

  _changeFirstname = (event) => {
    this.setState({firstname: event.target.value});
  }

  _changeLastname = (event) => {
    this.setState({lastname: event.target.value});
  }

  _submitData = () => {
    
    /* Check value */
    if(!this.state.lastname || !this.state.firstname) {
      return;
    }

    /* Request */
    var data =  {
      lastname: this.state.lastname,
      firstname: this.state.firstname
    }

    var options = {
      method: 'POST',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch('http://localhost:8080/users/create', options)
    .then((res) => (res.json()))
    .then(
      (result) => {
        this.setState({message: result.message});
      },
      (error) => {
        this.setState({message: "Une erreur s'est produite"});
      }
    )
  }
  
  

  render() {
    return (
      <div>
        <h1 class="title">MERN Boilerplate</h1>

        <div className="container">
          <input type="text" name="lastname" placeholder="Nom" onChange={this._changeLastname} value={this.state.lastname} required/>
          <br />
          <input type="text" name="firstname" placeholder="Prenom" onChange={this._changeFirstname} value={this.state.firstname} required/>
          <br />
          <button onClick={this._submitData}>Valider</button>
          <p>{this.state.message}</p>
        </div> 

      </div>
    );
  }
}

export default App;
