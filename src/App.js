import React, {Component} from 'react';
import './App.css';

import * as json from './names.json';

class App extends Component {
  getName() {
      let lastItem = null;

      Object.keys(json.default).forEach(function(key, i) {
          lastItem = i;
      });

      const line = Math.floor(Math.random() * Math.floor(lastItem));
      return json.default[line.toString()];
  }
  render () {
      let text = this.getName();
    return (
        <div className="App">
          <header className="App-header">
            <p>
              Célia, aujourd'hui tu es...
            </p>
              {text} !
          </header>
        </div>
    );
  }
}

export default App;
