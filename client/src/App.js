import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Doctors from './components/Doctors';
import Config from './Config';
import 'bulma/css/bulma.min.css';

class App extends React.Component {
  

  render() {
    return(
      
    )
  }
}

export default App;




state = {
  doctors: null
}

getDoctor = async (e) => {
  e.preventDefault();
  const location = e.target.elements.location.value;
  const specialty = e.target.elements.specialty.value;
  const insurance = e.target.elements.insurance.value;
  const api_call = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?limit=10&user_key=${Config.API_KEY}&location=${location}&specialty_uid=${specialty}&insurance_uid=${insurance}`);
  const data = await api_call.json();

  this.setState({
    doctors: data.data
  });

}

<div className="container">
        <Titles/>
        <br />
        <Form getDoctor={this.getDoctor}/>
        <br />
        <Doctors doctors={this.state.doctors}/>
      </div>