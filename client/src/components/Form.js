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
	<form className="box" onSubmit={props.getDoctor}>
        <div className="field">
            <div className="control">
                <div class="select">
                    <select name="location" id="state-select" required>
                        <option>Select dropdown</option>
                        { populateStates() }
                    </select>
                </div>
            </div>
        </div>
        <div className="field">
            <div className="control">
                <div class="select">
                    <select name= "location" required onChange={(e) => {props.updateSelectedInsurance(e.target.value)}}>
                        <option>Select dropdown</option>
                        { populateInsurance(props) }
                    </select>
                </div>
            </div>
        </div>
        <div className="field">
            <div className="control">
                <div class="select">
                    <select name= "location" required onChange={(e) => {props.updateSelectedPlan(e.target.value)}}>
                        <option>Select dropdown</option>
                        { populateInsurancePlans(props) }
                    </select>
                </div>
            </div>
        </div>
        <div className="field">
            <div className="control">
                <input className="input"  name="city" placeholder="Location slugs (e.g. 'ca-berkeley')"/>
            </div>
        </div>
        <div className="field">
            <div className="control">
                <input className="input" name="specialty" placeholder="UID of a specialty (e.g. 'pediatrician')"/>
            </div>
        </div>
        <div className="field">
            <div className="control">
                <input className="input" name="insurance" placeholder="UID of an insurance plan (e.g. 'aetna-aetnabasichmo')"/>
            </div>
        </div>
        <div className="field">
            <div className="control has-text-centered">
		        <button type="submit" className="button is-medium is-info is-rounded">Find</button>
            </div>
        </div>
	</form>
);

export default Form;