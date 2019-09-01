import React from 'react';
import classes from './Burger.css';
import BugerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

        let  tranformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BugerIngredient key={igKey+i} type={igKey} />
            });
        })
        .reduce((arr,el) => {
            return arr.concat(el)
        },[]);
        
        if(tranformedIngredients.length === 0){ 
            tranformedIngredients =  <p>Please start adding some ingredients !</p>;
        }
        

     return (
        <div className={classes.Burger}>
            <BugerIngredient type='seeds1'/>
            <BugerIngredient type='bread-top' />
            {tranformedIngredients}
            <BugerIngredient type='bread-bottom' />
        </div>

    );
};

export default burger;