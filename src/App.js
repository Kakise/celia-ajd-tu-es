import React, {Component} from 'react';
import './App.css';

import * as json from './names.json';

class App extends Component {
    constructor() {
        super();
        let lastItem = null;

        Object.keys(json.default).forEach(function(key, i) {
            lastItem = i;
        });

        const line = Math.floor(Math.random() * Math.floor(lastItem));
        this.state = {name: json.default[line.toString()]};
    }
  getName() {
      let lastItem = null;

      Object.keys(json.default).forEach(function(key, i) {
          lastItem = i;
      });

      const line = Math.floor(Math.random() * Math.floor(lastItem));
      this.setState({name: json.default[line.toString()]});
  }
  render () {
    return (
        <div className="App" onClick={() => {this.getName();}}>
          <header className="App-header">
            <p>
              Célia, aujourd'hui tu es...
            </p>
              {this.state.name} !
          </header>
        </div>
    );
  }
}

export default App;
