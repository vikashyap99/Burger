import React from 'react';
import Aux from '../../../hoc/Aaux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
    .map(igkey  => {
        return <li key={igkey}> <span style={{textTransform:'capitalize'}}>{igkey}:</span> {props.ingredients[igkey]} </li>
    });
return(
    <Aux>
        <h3>Your Order</h3>
        <p>A delicious Burger with the following ingredients:</p>
        <ul >
            {ingredientSummary }
        </ul>
        <p><strong>Total price : {props.price}</strong></p>
        <p>Please Continue to checkout ?</p>
        
        <Button 
        btntype='Danger'
        clicked = {props.Cancel}>
            CANCEL</Button>
        <Button
        btntype='Success'
        clicked= {props.Continue}>
            CONTINUE</Button>

    </Aux>

)
}



export default orderSummary;