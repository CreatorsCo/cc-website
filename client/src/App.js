import React from 'react';
import './stylesheets/App.css';


import HoldingPage from '../src/comingsoon/HoldingPage';

export default class App extends React.Component {
  render() {
    return (
      <div id="app">
          <HoldingPage />
      </div>
    )
  }
};
