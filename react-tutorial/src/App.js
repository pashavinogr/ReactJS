import React, {Component} from 'react';
import './App.css';

import Header from './components/Header';
import Caption from './components/Caption';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Caption />
      </div>
    );
  }
    
}

export default App;