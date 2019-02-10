import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { goBack } from 'connected-react-router'

import RecipeDetail from './RecipeDetail';
import { recipeDetailLoaded, ingredientChanged } from '../actions/foodActions'

import '../../css/food.css'
class RecipeView extends Component {
    constructor(props) {
        super(props);
        if (props.ingredientList.lenght !== 0) {
            firebase.database().ref('ingredients').on('value', this.ingredientChanged);
        }
    }

    ingredientChanged = (snap) => {
        this.props.dispatch(ingredientChanged(snap))
    }

    renderView() {
        var routeRepID = this.props.match.params.repid;
        if (routeRepID === undefined || routeRepID === null) {
            console.log('Default View');

            return <div>Recipe Not Found</div>;
        }
        else if (this.props.viewingRepID === routeRepID) {
            console.log('Displaying ID ' + routeRepID);
            return <RecipeDetail viewingRep={this.props.viewingRep} viewingRepID={routeRepID} />
        } else {
            console.log('ID ' + routeRepID + ' was not loaded, curent ID: ' + this.props.viewingRepID);
            firebase.database().ref('recipes/' + routeRepID).once('value').then((snap) => {
                console.log('ID ' + routeRepID + ' loaded');
                // console.log(snap.val());

                this.props.dispatch(recipeDetailLoaded(this.props.match.params.repid, snap.val()));
            });

            return <RecipeDetail viewingRep={undefined} viewingRepID={routeRepID} />
        }
    }

    render() {
        return (
            <div id="recipe-view" >
                <h4>Recipe View</h4>
                <a onClick={() => this.props.dispatch(goBack())} className="icon icon-Arrow-Left2"
                    style={{ cursor: 'pointer'}}></a>
                 {this.renderView()} 
            </div>
        );
    }
}

RecipeView = connect((store) => {
    return {
        viewingRepID: store.food.viewingRepID,
        viewingRep: store.food.viewingRep,
        ingredientList: store.food.ingredientList
    }
})(RecipeView)

export default RecipeView;