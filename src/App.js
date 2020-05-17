import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/menuComponent';

import { DISHES } from './shared/dishes';
//import { render } from '@testing-library/react';
 // eslint-disable-next-line no-unused-expressions

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

render() {
  return (
    <div className="App">
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes =  {this.state.dishes}/>
    </div>
  );
}

 }
 

export default App;
