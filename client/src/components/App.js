import React, { Component } from 'react';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import '../styles/global.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {


    render() {
        return (
          <BrowserRouter className="App">
     
            <div>
                 <ul>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/about">About</Link></li>
                   <li><Link to="/contact">Contact</Link></li>
     
                 </ul>
     
               <Route exact path="/" component={Home} />
               <Route path="/about" component={About} />
               <Route path="/Contact" component={Contact} />
            </div>
     
          </BrowserRouter>
        );
      }

      export default App;