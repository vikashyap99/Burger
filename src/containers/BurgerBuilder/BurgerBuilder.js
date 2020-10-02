import React,{Component} from 'react';
import Aux from '../../hoc/Aaux';
import Burger from '../../components/Burger/Burger';
import BuildControls from  '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


const INGREDIENT_PRICE = {
    salad: 10,
    bacon: 25,
    meat: 20,
    cheese: 15
}

class BurgerBuilder extends Component{
    state = {
        ingredients : null,
        totalPrice: 10,
        purchasable: false,
        purchasing: false,
        loading: false

    }

    componentDidMount(){
        axios.get('https://react-burger-app-5086d.firebaseio.com/ingredients.json')
        .then(response => {
            this.setState({ingredients: response.data});
            console.log(response.data)
        })
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

        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Vikash Kashyap',
                address: {
                    street: 'Vivek nagar',
                    zipcode: 221005,
                    city: 'Varanasi',
                    country: 'India'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fasted'
        }

        axios.post('/order.json',order)
        .then(respone => {
            this.setState({loading: false, purchasing: false})
            console.log(respone)
        } )
        .catch(error => {
            this.setState({loading: false, purchasing: false})
            console.log(error)
        });
        


    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (var keys in disabledInfo){
            disabledInfo[keys] = disabledInfo[keys] <= 0
        }

        let  ordersummary = null;
        let burger = <Spinner />

        if(this.state.ingredients){
            burger = (
                <Aux>
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
            ordersummary = (<OrderSummary ingredients={this.state.ingredients}
                Cancel = {this.removebackdropHandler}
                Continue= {this.continueorderHandler} 
                price = {this.state.totalPrice}
                />)
        }
        if(this.state.loading)
            ordersummary = <Spinner />

        return(

            <Aux>
                <Modal purchasing = {this.state.purchasing}
                    clicked = {this.removebackdropHandler} >
                    {ordersummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const NewComponent = WithErrorHandler(BurgerBuilder, axios);

export default NewComponent;