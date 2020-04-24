import React from "react";
import { Route, Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Form from './components/Form'
import Orders from './components/Orders'
import logo from './images/pizza.jpg';

const App = () => {
  // let history = useHistory();
  // let routeHome = () => (
  //   history.push('/')
  // )
  return (
    <>
    <div>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to='/'>Homepage</Link>
      </nav>
    </div>
    <Route exact path = '/'>
      <div>
        <h1>Build your own pizza!</h1>
        {/* <a className='home-button' onClick={routeHome}><img src={hero} className='hero-img' alt='pizza'/></a> */}
        <Link to='/form' className='img-to-form'><img src={logo} className="hero" alt="logo" /></Link>
        <h1>Lets get started!</h1>
      </div>
    </Route>
    
    <Route path='/form'>
      <Form/>
    </Route>

    <Route path = '/orders'>
      <Orders/>
    </Route>
    </>
  );
};
export default App;
