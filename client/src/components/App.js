<<<<<<< HEAD
import React from 'react';
import Titles from './Titles';
import Form from './Form';
import Nav from './Nav';
import Doctors from './Doctors';
import Config from './Config';
import 'bulma/css/bulma.min.css';
import Body from './Body';

class App extends React.Component {

  state = {
    doctors: null
  }

  getDoctor = async (e) => {
    e.preventDefault();
    const state = e.target.elements.location.value;
    const city = e.target.elements.city.value;
    const location = `${state}-${city}`.toLocaleLowerCase();
    const specialty = e.target.elements.specialty.value;
    const insurance = e.target.elements.insurance.value;
    const api_call = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?limit=10&user_key=${Config.API_KEY}&location=${location}&specialty_uid=${specialty}&insurance_uid=${insurance}`);
    const data = await api_call.json();

    this.setState({
      doctors: data.data
    });

  }

  render() {
    return(
      <div>
        <Nav />
        <div className="container">
          <Titles/>
          <br />
          <Form getDoctor={this.getDoctor}/>
          <br />
          <Doctors doctors={this.state.doctors}/>
        </div>
        <Body />
      </div>

    )
  }
}

export default App;
=======
import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
import Language from './Language';
import Ratings from './Ratings';
import '../styles/global.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {


    render() {
        return (
          <BrowserRouter className="App">
     
            <div class="Links">
            <ul>
                   <li><Link to="/Language">Language</Link></li>
                   <li><Link to="/Ratings">Ratings</Link></li>
                   <li><Link to="/About" >About</Link></li>
                   <li><Link to="/Contact">Contact</Link></li>
     
            </ul>
               <Route path="/Language" component={Language} />
               <Route path="/Ratings" component={Ratings} />
               <Route path="/About" component={About} />
               <Route path="/Contact" component={Contact} />
            </div>
     
          </BrowserRouter>
        );
        }
    }

    export default App;
>>>>>>> head
