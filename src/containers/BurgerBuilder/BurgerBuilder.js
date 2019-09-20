import React,{Component} from 'react';
import Aux from '../../hoc/Aaux';
import Burger from '../../components/Burger/Burger';
import BuildControls from  '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICE = {
    salad: 10,
    bacon: 25,
    meat: 20,
    cheese: 15
}

class BurgerBuilder extends Component{
    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            meat : 0,
            cheese: 0

        },
        totalPrice: 10,
        purchasable: false,
        purchasing: false

    }

    updatePurchaseState  (ingredients) {

        const sum = Object.keys(ingredients)
        .map(igkey => {
            return ingredients[igkey];
        })
        .reduce((sum,el) => {
            return sum + el;
        },0);
        this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceAdition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice+priceAdition;

        this.setState({totalPrice: updatedPrice,ingredients: updatedIngredients})

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        const updatedCount = oldCount-1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceAdition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice-priceAdition;

        this.setState({totalPrice: updatedPrice,ingredients: updatedIngredients})
    }

    purchasingHandler = () => {
        this.setState({purchasing: true})
    }
    removebackdropHandler = () => {
        this.setState({purchasing: false})
    }
    continueorderHandler = () => {
        alert('Order Continue !!');
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (var keys in disabledInfo){
            disabledInfo[keys] = disabledInfo[keys] <= 0
        }

        return(
            <Aux>
                <Modal purchasing = {this.state.purchasing}
                clicked = {this.removebackdropHandler} >
                    <OrderSummary ingredients={this.state.ingredients}
                    Cancel = {this.removebackdropHandler}
                    Continue= {this.continueorderHandler} 
                    price = {this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                ingredientadded = {this.addIngredientHandler}
                ingredientremove = {this.removeIngredientHandler}
                disabled = {disabledInfo}
                price = {this.state.totalPrice}
                ordered = {this.purchasingHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;