import React,{Component} from 'react';
import Aux from '../../hoc/Aaux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    state = {
        ingredients : {
            salad: 1,
            bacon: 1,
            meat : 2,
            cheese: 2

        }
    }
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Control</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;