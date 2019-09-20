import React from 'react';


import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';


const navgationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='./' active >BurgerBuilder</NavigationItem>
        <NavigationItem link='./'>Checkout</NavigationItem>
    </ul>
);

export default navgationItems;