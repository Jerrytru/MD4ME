import React from 'react';
import Home from './Home.jsx'
import Nav from './Nav'
import About from './About';
import Contact from './Contact';
import Language from './Language';
import Ratings from './Ratings';
import '../styles/global.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends React.Component {

  render() {

    return(
    <BrowserRouter className="App">
      <div class="Links">
        <Nav />
      <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/Language"></Link></li>
         <li><Link to="/Ratings"></Link></li>
         <li><Link to="/About" ></Link></li>
         <li><Link to="/Contact"></Link></li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/Language" component={Language} />
      <Route path="/Ratings" component={Ratings} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
    </div>
  </BrowserRouter>

    )
  }
}

export default App;
