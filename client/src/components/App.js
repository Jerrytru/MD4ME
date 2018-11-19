import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
import Language from './Language';
import Ratings from './Ratings';
import '../styles/global.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {


    render() {
        return (
          <BrowserRouter className="App">
     
            <div class="Links">
            <ul>
                   <li><Link to="/Language">Language</Link></li>
                   <li><Link to="/Ratings">Ratings</Link></li>
                   <li><Link to="/About" >About</Link></li>
                   <li><Link to="/Contact">Contact</Link></li>
     
            </ul>
               <Route path="/Language" component={Language} />
               <Route path="/Ratings" component={Ratings} />
               <Route path="/About" component={About} />
               <Route path="/Contact" component={Contact} />
            </div>
     
          </BrowserRouter>
        );
        }
    }

    export default App;