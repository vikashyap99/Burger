import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aaux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (

    <Aux >
    <Backdrop  purchasing = {props.purchasing}
    clicked = {props.clicked} 
    />
    <div className={classes.Modal}
    style = {{
        transform: props.purchasing ? 'translateY(0)' : 'translateY(-100vh)' ,
        opacity: props.purchasing ? '0.95' : '0.2'
        
    }}
    >
        {props.children}
    </div>
    </Aux>
)

export default modal;