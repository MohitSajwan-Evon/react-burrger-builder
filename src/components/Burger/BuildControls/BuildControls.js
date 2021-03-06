import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' }
]

const buildControls = (props) => {

  return (
    <div className={classes.BuildControls} >
      <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map((cntrl) => {
        return <BuildControl
          key={cntrl.label}
          label={cntrl.label}
          added={() => props.ingredientAdded(cntrl.type)}
          removed={()=> props.ingredientRemoved(cntrl.type)} 
          />
      })}
      <button className={classes.OrderButton} disabled={!props.purchasable}>Order Now</button>
    </div>
  );
};

export default buildControls;