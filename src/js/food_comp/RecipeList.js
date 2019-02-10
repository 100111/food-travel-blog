import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';

import { recipeChanged } from '../actions/foodActions'
import RecipePreview from './RecipePreview'

class RecipeList extends Component {
    constructor(props) {
        super(props);
        this.recipesRef = firebase.database().ref('recipes').limitToLast(10);
        this.recipesRef.on('value', this.recipeRefChanged);
    }
    
    recipeRefChanged = (snap) => {
        this.props.dispatch(recipeChanged(snap))
    }

    renderList() {
        if (this.props.haveRep > 0) {
            return (
                <div className='rep-list'>
                    {
                        this.props.recipes.map((recipe, index) => {
                            return (<RecipePreview key={index} recipe={recipe} repid={index}/>)
                        })
                    }
                </div>
            );
        } else if (this.props.haveRep === 0){
            return (<p>Loading...</p>)
        }
        
        return (<p>No repcie</p>);
    }

    render() {
        return this.renderList();
    }
}

RecipeList = connect((store) => {
    return {
        haveRep: store.food.haveRep,
        recipes: store.food.recipes
    }
})(RecipeList)
    
export default RecipeList;