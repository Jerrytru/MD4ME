import React from "react";

const  states = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
    }

const populateInsurance = (props) => {
    return props.insurances.map(el => <option>{el.name}</option>)
}

const populateInsurancePlans = (props) => {
    return props.selectedPlans.map(el => <option>{el.name}</option>)
}

const  populateStates = () => {
    let options = [];
    for (let state in states) {
        options.push( <option>{state}</option> )
    }
    return options;
}

const Form = props => (
	<form id="api-form" onSubmit={props.getDoctor}>
        <div className="box">
            <div className="columns">
                <div className="column is-6">
                    <div className="field">
                        <div className="control is-expanded">
                            <div class="select is-fullwidth">
                                <select required name="location" id="state-select">
                                    <option disabled selected value="">Select state</option>
                                    { populateStates() }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control is-expanded">
                            <div class="select is-fullwidth">
                                <select name= "location" onChange={(e) => {props.updateSelectedInsurance(e.target.value)}}>
                                    <option>Select insurance</option>
                                    { populateInsurance(props) }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control is-expanded">
                            <div class="select is-fullwidth">
                                <select onChange={(e) => {props.updateSelectedPlan(e.target.value)}}>
                                    <option>Select plan</option>
                                    { populateInsurancePlans(props) }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-6">
                    <div className="field">
                        <div className="control">
                            <input className="input"  name="city" placeholder="Location slugs (e.g. 'city')"/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="input" name="specialty" placeholder="UID of a specialty (e.g. 'pediatrician')"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="field">
            <div className="control has-text-centered">
                <button type="submit" className="button is-large is-white has-text-info">Search</button>
            </div>
        </div>
	</form>
);

export default Form;
