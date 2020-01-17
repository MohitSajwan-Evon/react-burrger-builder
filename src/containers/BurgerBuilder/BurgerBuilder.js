import React, { Component } from 'react';

import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../containers/BurgerBuilder/BurgerBuilder';

const INGREDIENT_PRICE = {
  salad: 0.5,
  meat: 1.5,
  cheese: 1.0,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0
    },
    totalPrice: 3,
    purchasable: false
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
    .map( igKey => {
      return ingredients[igKey];
    })
      .reduce((sum, el)=>{
        return sum + el;
    },0);
    this.setState({purchasable: sum > 0});
  }

  addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = oldCount;
    const addingPrice = INGREDIENT_PRICE[type];
    const newPrice = this.state.totalPrice + addingPrice;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  }
  removeIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const newCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = newCount;
    const removingPrice = INGREDIENT_PRICE[type];
    const newPrice = this.state.totalPrice - removingPrice;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  }
  render() {
    return (
      <Aux>
        <Modal>
          {/* <OrderSummary ingredients={this.state.ingredients}></OrderSummary> */}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientsHandler}
          ingredientRemoved={this.removeIngredientsHandler}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;