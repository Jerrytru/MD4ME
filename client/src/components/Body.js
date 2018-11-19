/*

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.inputNode.value)
  }*/


  import React from 'react';
  import vaccine from '../Images/vaccine.gif';
  import logo from '../Images/appstore.png';
  import googleplay from '../Images/googleplay.png';
  import familypic from '../Images/family.gif';



  const vac = {
    display: 'flex',

  }





  class Body extends React.Component{
    constructor() {
  super();
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleSubmit = event => {
  event.preventDefault();
  console.log(this.inputNode.value)
}

    render(){

  return (

  <div>

  <div className="content has-text-centered is-marginless">
    <h1>Download MD4ME now. </h1>
      <p className="is-vcentered is-mobile">Find nearby doctors in your area </p>
      <p className= "is-vcentered is-mobile">Browse by Insurance</p>
      <p className="is-vcentered is-mobile">Browse by Specialty</p>
      <h3 className="is-vcentered is-mobile">Send me a link to the app</h3>
      </div>


  <div className = "">
  <figure class="columns is-centered is-vcentered is-mobile">
  <p className = "image is-128x128" as D>
  <img id='vac'src={vaccine} style={{ }}/>
  </p>
  </figure>
  </div>


  <div className="field has-addons" class="columns is-centered is-vcentered is-mobile">
    <div className="control" >
      <input class="columns is-centered is-vcentered is-mobile" className="input" type="text" placeholder="Find a repository"></input>
    </div>
    <div className="control">
      <a className="button is-info">
        Search
      </a>
    </div>
    </div>










</div>









  )

    }
  }

    export default Body;
