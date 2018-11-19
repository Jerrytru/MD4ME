import React from 'react';
import Titles from './Titles';
import Form from './Form';
import Nav from './Nav';
import Doctors from './Doctors';
import Config from './Config';
import 'bulma/css/bulma.min.css';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      doctors: [],
      insurance: [],
      selectedInsurance: null,
      selectedInsurancePlans: [],
      selectedPlanName: null,
      selectedPlan: {}
    }
    this.updateSelectedInsurance = this.updateSelectedInsurance.bind(this);
    this.updateSelectedPlan = this.updateSelectedPlan.bind(this);
  }

  updateSelectedInsurance(insuranceName) {
    let foundInsurance = this.state.insurance.find((ins) => ins.name === insuranceName);
    if(foundInsurance) {
      this.setState({selectedInsurance: foundInsurance});
      this.setState({selectedInsurancePlans: foundInsurance.plans});
    }
  }

  updateSelectedPlan(planName) {
    let selectedPlan = this.state.selectedInsurancePlans.find(plan => plan.name === planName);
    if(selectedPlan) {
      this.setState({selectedPlan: selectedPlan});
    }
  }


  getDoctor = async (e) => {
    e.preventDefault();

    const state = document.getElementById('state-select').value;
    console.log('State:', state);
    const city = e.target.elements.city.value;
    let location = "";
    if(city) {
      location = `${state}-${city}`.toLocaleLowerCase();
    } else {
      location = state.toLocaleLowerCase();
    }
    const specialty = e.target.elements.specialty.value;
    const insurance = this.state.selectedPlan.uid;
    const api_call = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?limit=10&user_key=${Config.API_KEY}&location=${location}&specialty_uid=${specialty}&insurance_uid=${insurance}`);
    const data = await api_call.json();

    this.setState({
      doctors: data.data
    });

  }

  getInsurance = async (e) => {
    const api_call = await fetch(`https://api.betterdoctor.com/2016-03-01/insurances?skip=0&user_key=${Config.API_KEY}`)
    const {data} = await api_call.json()
    return data;
  }

  async componentDidMount() {
    let data = await this.getInsurance();
    this.setState({insurance: data});
  }

  render() {
    return(
      <div>
        <Nav />
        <div className="container">
          <Titles/>
          <br />
          <Form getDoctor={this.getDoctor} getInsurance={this.getInsurance} 
          insurances={this.state.insurance}
          selectedPlans={this.state.selectedInsurancePlans}
          updateSelectedInsurance={this.updateSelectedInsurance}
          updateSelectedPlan={this.updateSelectedPlan}/>
          <br />
          <Doctors doctors={this.state.doctors}/>
      </div>
      </div>
      
    )
  }
}

export default App;