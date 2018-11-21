import React, { Component } from 'react'
import Title from './Title';
import Form from './Form';
import Doctors from './Doctors';
import Config from './Config';
import 'bulma/css/bulma.min.css';
import Body from './Body';
import '../styles/global.css';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      doctors: [],
      insurance: [],
      selectedInsurance: null,
      selectedInsurancePlans: [],
      selectedPlanName: null,
      selectedPlan: {},
      search: false
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
    const city = e.target.elements.city.value;
    console.log("City", city)
    let location = "";
    if(city) {
      location = `${state}-${city}`.toLocaleLowerCase();
      console.log(location);
    } else {
      location = state.toLocaleLowerCase();
    }
    const specialty = e.target.elements.specialty.value;
    let insurance = this.state.selectedPlan.uid;
    if(!insurance) insurance = "";
    console.log(location, specialty, insurance);
    const api_call = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?limit=10&user_key=${Config.API_KEY}&location=${location}&specialty_uid=${specialty}&insurance_uid=${insurance}`);
    const data = await api_call.json();
    console.log(data.data)

    this.setState({
      doctors: data.data, search: true
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
    return (
      <div>
        <div className="container">
          <Title/>
          <br />
          <Form getDoctor={this.getDoctor} getInsurance={this.getInsurance}
          insurances={this.state.insurance}
          selectedPlans={this.state.selectedInsurancePlans}
          updateSelectedInsurance={this.updateSelectedInsurance}
          updateSelectedPlan={this.updateSelectedPlan}
          />
          <br />
          <Doctors doctors={this.state.doctors} search={this.state.search}/>
        </div>
        <Body />
      </div>

    )
  }
}

export default Home
