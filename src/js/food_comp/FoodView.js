import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';

import RecipeList from './RecipeList';
// import { recipeDetailLoaded } from '../actions/foodActions'
import { ingredientChanged } from '../actions/foodActions'

import '../../css/food.css'
class FoodView extends Component {
    constructor(props) {
        super(props);

        if (props.ingredientList.lenght !== 0) {
            firebase.database().ref('ingredients').on('value', this.ingredientChanged);
        }
    }

    ingredientChanged = (snap) => {
        this.props.dispatch(ingredientChanged(snap))
    }

    render() {
        return (
            <div id="food-view">
                <h4>Food View</h4>
                < RecipeList />
            </div>
        );
    }
}

FoodView = connect((store) => {
    return {
        ingredientList: store.food.ingredientList
    }
})(FoodView)

export default FoodView;