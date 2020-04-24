import React, { useState } from "react";
import { Route, Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Form from './components/Form'
import Orders from './components/Orders'
import logo from './images/pizza.jpg';
import axios from 'axios'

let pizzaOrder = [
  {
    id: Date.now(),
    name: '',
    size: true,
    toppings: [
      '',
      '',
      '',
      ''
    ],
    instructions: '',
  }
]

let initialValues = {
  name: '',
  size: 'small',
  toppings: {
    pepperoni: false,
    olives: false,
    pineapple: false,
    bacon: false,
    instructions: '',
  }
}

const App = () => {
  // let history = useHistory();
  // let routeHome = () => (
  //   history.push('/')
  // )
  
  //name
  //size drop down
  //checklist 
  //textbox
  let [pizza, setPizza] = useState(pizzaOrder);
  // console.log(pizza)
  let [formValues, setFormValues] = useState(initialValues);
  // console.log('inside form', formValues)

  let handleChanges = e =>{
    let name = e.target.name,
        value = e.target.value
    
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  let onCheckboxChange = e => {
    let {name} = e.target
    let isChecked = e.target.checked

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked,
      }
    })
  }

  let onSubmit = e => {
    e.preventDefault()
    // let addPizza = {
    //   id: Date.now(),
    //   name: formValues.name,
    //   size: formValues.size === 'small' ? false : true,
    //   toppings: Object.keys(formValues.toppings).filter(topping => formValues.toppings[topping] === true),
    //   instructions: formValues.instructions,
    // }
    // setPizza([ ...pizza, addPizza ])
    axios.post('https://reqres.in/api/users', formValues )
      .then(res => {
        console.log(res)
      })
    setFormValues(initialValues)
  }

  return (
    <>
    <div>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to='/'>Homepage</Link>
        <Link to='/orders'>Order</Link>
      </nav>
    </div>
    <Route exact path = '/'>
      <div>
        <h1>Build your own pizza!</h1>
        {/* <a className='home-button' onClick={routeHome}><img src={hero} className='hero-img' alt='pizza'/></a> */}
        <Link to='/form' className='img-to-form'><img src={logo} className="hero" alt="logo" /></Link>
        <Link to='/form' className='starter-text'><h1>Lets get started!</h1></Link>
      </div>
    </Route>
    
    <Route path='/form'>
      <Form
      values={formValues}
      handleChanges={handleChanges}
      onCheckboxChange={onCheckboxChange}
      onSubmit={onSubmit}
      />
    </Route>

    <Route path = '/orders'>
      <Orders key={pizza.id} orders={pizza}/>
    </Route>
    </>
  );
};
export default App;
