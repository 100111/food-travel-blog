import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { Parallax } from 'react-parallax'

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

    renderOld() {
        return (
            <div id="food-view">
                <h4>Food View</h4>
                
            </div>
        );
    }

    render() {
        return (
            <div className="sub-container">
                <section className="space--sm">
                    <div class="rep-container">
                    
                    < RecipeList />
                    <div className="pagination">
                        <a className="pagination__prev" href="#" title="Previous Page">&laquo;</a>
                        <ol>
                            <li className="pagination__current">1</li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">4</a>
                            </li>
                        </ol>
                        <a className="pagination__next" href="#" title="Next Page">&raquo;</a>
                        </div>
                        </div>
                    
                </section>
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