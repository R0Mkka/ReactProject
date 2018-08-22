import React, { Component } from 'react';

import './css/bootstrap-grid.min.css';
import './css/style.css';
import './fonts/fonts.css';

import Header from './Header.js';
import Menu from './Menu.js';
import Slider from './Slider.js';

class App extends Component {
  render() {
    return (
      <div>

        <Header />
        <Menu />
        <Slider />

      </div>
    );
  }
}

export default App;
