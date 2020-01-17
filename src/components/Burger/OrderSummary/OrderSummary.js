import React from 'react';

import Aux from '../../../hoc/aux'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li>
          <span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      );
    })
  return (
    <div>
      <Aux>
        <h3>Your Order</h3>
        <p>A Delicious Burger with the following Ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p>Continue to Checkout ?</p>
      </Aux>
    </div>
  );
};

export default orderSummary;