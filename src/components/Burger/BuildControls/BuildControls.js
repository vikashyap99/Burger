import React from 'react';

import classes from "./BuildControls.css";
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad' },
    {label: 'Cheese', type: 'cheese' },
    {label: 'Bacon', type: 'bacon' },
    {label: 'Meat', type: 'meat' },
];



const buildControls = (props) => (

   
    <div className={classes.BuildControls}>

         <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>

        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={() => props.ingredientadded(ctrl.type)}
            remove={() => props.ingredientremove(ctrl.type)} 
            disabled={props.disabled[ctrl.type]}

            />
        ))}
        <button className={classes.OrderButton}
        onClick = {props.ordered}>
            
        OREDR NOW</button>
        <p>.</p>
    </div>
);

export default buildControls;