import React, {Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aaux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component  {

        render(){
            return (
                <Aux >
                <Backdrop  
                    purchasing = {this.props.purchasing}
                    clicked = {this.props.clicked} 
                />
                <div className={classes.Modal}
                style = {{
                    transform: this.props.purchasing ? 'translateY(0)' : 'translateY(-100vh)' ,
                    opacity: this.props.purchasing ? '0.95' : '0.2'
                        }}>
                {this.props.children}
                </div>
                </Aux>
            )
        }
    
}

export default Modal;