import React from 'react';
import '../styles/global.css';



class Language extends React.Component {
  render() {
      return (
        <div id="bg">
        <div id="Container">
        <select>
            <option value="Directory">--Please choose your prefered language.--</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="Creole">Creole</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Russian">Russian</option>
            <option value="Chinesse">Chinesse</option>
        </select>
        </div>
    </div>
      )
    }
  }

  export default Language;



