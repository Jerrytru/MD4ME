import React from 'react';

class Language extends React.Component {
    render() {
      return (
    <div class="Language">
        <label for="Language-selection">Do you need a doctor that speaks your language?:</label>

        <select id="Language-selection">
            <option value="">--Please choose your prefered language.--</option>
            <option value="dog">Spanish</option>
            <option value="cat">French</option>
            <option value="hamster">Creole</option>
            <option value="parrot">Portuguese</option>
            <option value="spider">Russian</option>
            <option value="goldfish">Chinesse</option>
        </select>
    </div>
      );
    }
  }



