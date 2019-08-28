import React from 'react';
import classes from './Burger.css';
import BugerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

        const  tranformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BugerIngredient key={igKey+i} type={igKey} />
            });
        });
        

     return (
        <div className={classes.Burger}>
            <BugerIngredient type='bread-top' />
            {tranformedIngredients}
            <BugerIngredient type='bread-bottom' />
        </div>

    );
};

export default burger;