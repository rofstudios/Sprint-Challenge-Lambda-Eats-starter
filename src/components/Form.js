import React from 'react'
import styled from 'styled-components'

function Form(props){
    const {
        values,
        handleChanges,
        onCheckboxChange,
        onSubmit,
      } = props
      console.log('value log',values)
    return (
        <>
        <form>
            <h2>Lets build your pizza!</h2>
            
            <label htmlFor='name'>Name: </label>
            <input id='name' type='text' name='name' value={values.name} onChange={handleChanges}/>

            <label htmlFor='size'>Size: </label>
            <select id='size' name='size' value={values.size} onChange={handleChanges}>
                <option value='small'>Small</option>
                <option value='large'>Large</option>
            </select>

            <input id='pepperoni' name='pepperoni' type='checkbox' checked={values.toppings.pepperoni} onChange={onCheckboxChange}/>
            <label htmlFor='pepperoni'>Pepperoni </label>

            <input id='olives' name='olives' type='checkbox' checked={values.toppings.olives} onChange={onCheckboxChange}/>
            <label htmlFor='olives'>Olives </label>

            <input id='pineapple' name='pineapple' type='checkbox' checked={values.toppings.pineapple} onChange={onCheckboxChange}/>
            <label htmlFor='pineapple'>Pineapple </label>

            <input id='bacon' name='bacon' type='checkbox' checked={values.toppings.bacon} onChange={onCheckboxChange}/>
            <label htmlFor='bacon'>Bacon </label>

            <label htmlFor='instructions'>Additional Instructions: </label>
            <textarea id='instructions' name='instructions' value={values.instructions} onChange={handleChanges}/>

            <button onClick={onSubmit}>Place Order</button>
        </form>
        </>
    )
}

export default Form;