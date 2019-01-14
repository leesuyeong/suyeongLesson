import React, { Component } from 'react';
import './App.css';

import Card from './components/Card';
import LikeButton from './components/LikeButton';
import NameInput from './components/NameInput';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Card
          image="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
          text="설명1" />
        <Card
          image="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
          text="설명222" />
        <Card
          image="https://homepages.cae.wisc.edu/~ece533/images/cat.png"
          text="설명33333333" />
        <LikeButton />
        <NameInput/>
      </div>
    );
  }
}

export default App;
