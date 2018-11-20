import React from "react";

function Doctors(props) {
    if(props.doctors.length === 0 && props.search===false) {
        return (
        <div className="notification is-info">
            <p>Try to search somebody.</p>
        </div>
        );
    }
    let doctors = [];
    for(let i = 0; i !== props.doctors.length; i++) {
        let doctor = props.doctors[i];
        let practices = [];
        let specialties = [];
        for(let i = 0; i !== doctor.specialties.length; i++) {
            let specialty = doctor.specialties[i];
            specialties.push(
            <li key = {i + '-specialty'}>
                {specialty.name} - {specialty.description}
            </li>
            )

        }
        for(let i = 0; i !== doctor.practices.length; i++) {
            let practice = doctor.practices[i];
            practices.push(
            <li key={i + '-practice'}>
               {practice.name}, {practice.visit_address.street}, {practice.visit_address.city}, {practice.visit_address.state}, {practice.visit_address.zip}  
            </li>
            );
        }
        doctors.push(
        <div key={i + '-media'} className="media">
            <figure className="media-left">
                <p className="image is-64x64">
                    <img src={doctor.profile.image_url} alt="doc"/>
                </p>
            </figure>
            <div className="media-content">
                <div className="content">
                    <p className="title is-6">{doctor.profile.first_name} {doctor.profile.last_name}</p>
                    <p>{doctor.profile.bio}</p>
                    <p>Specialties:</p>
                    <ul>{specialties}</ul>
                    <p>Practices:</p>
                    <ul>{practices}</ul>
                </div>
            </div>
        </div>
        );
    }
    if(doctors.length === 0) {
        return (
        <div className="notification is-warning has-text-centered has-text-danger">
            <p>Nothing was found, please try again.</p>
        </div>
        );
    }
    return (
    <div className="box">
        {doctors}
    </div>
    );
  }

export default Doctors;

