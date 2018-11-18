import React from "react";

const Form = props => (
	<form className="box" onSubmit={props.getDoctor}>
        <div className="field">
            <div className="control">
                <input required className="input" name="location" placeholder="Location slugs (e.g. 'ca-berkeley')"/>
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