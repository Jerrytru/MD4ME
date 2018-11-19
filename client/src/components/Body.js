/*

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.inputNode.value)
  }*/


  import React from 'react';
  import vaccine from '../Images/vaccine.gif';
  import logo from '../Images/appstore.png';
  import googleplay from '../Images/googleplay.png';



  const vac = {
    display: 'flex',

  }




  class Body extends React.Component{

    render(){

  return (
  <div>

  <div className="content">
    <h1 className="items">Download MD4ME now. </h1>

      <p>Find nearby doctors in your area </p>
      <p>Browse by Insurance</p>
      <p>Browse by Specialty</p>
      <h3>Send me a link to the app</h3>
      </div>


  <div className = "">
  <figure className ="media-right">
  <p className = "image is-128x128" as D>
  <img id='vac'src={vaccine} style={{ }}/>
  </p>
  </figure>
  </div>


  <div className="field has-addons">
    <div className="control">
      <input className="input" type="text" placeholder="Find a repository"></input>
    </div>
    <div className="control">
      <a className="button is-info">
        Search
      </a>
    </div>
    </div>

    <div className="columns is-mobile">
      <div className="column">
      <figure className ="media-leftt">
      <p className = "image is-128x128">
      <img src={logo} alt = "doc"/>
      </p>
      </figure>
      <figure >
      <p className = "image is-128x128">
      <img src={googleplay} alt ="doc"  />
      </p>
      </figure>
      </div>

      </div>




  </div>
  )

    }
  }

    export default Body;
