import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import { deepPurple900 } from 'material-ui/styles/colors';

import IngredientDetail from './IngredientDetail'
import InstructionDetail from './InstructionDetail'
import TagList from './TagList';
import ReactDisqusComments from 'react-disqus-comments';


import '../../css/food_detail.css'
class RecipeDetail extends Component {
    constructor(props) {
        super(props);

    }

    renderIngredients(ingredients) {
        console.log('Render ing');
        console.log(ingredients);

        Object.keys(ingredients).map((ingName, ingIndex) => {
            console.log(ingName);

        });
    }

    renderSpecialEquipment = (specialEquipment) => {
        if (specialEquipment === undefined) {
            return <div className='rep-d-s-special'>No special equipments</div>
        } else {
            return <div className='rep-d-s-special'>
                <div>Special equipments: </div>
                {specialEquipment.map((equ, equIndex) => {
                    return <div key={equIndex}>{equ}</div>
                })}
            </div>
        }
    }

    randomNumber() {
        return Math.round(Math.random() * 1000) + 500;
    }

    render() {
        const recipe = this.props.viewingRep;
        const iconStyles = {
            fontSize: '36px'
        };
        if (recipe === undefined) return (<div className='rep-detail'>No data</div>);
        else {
            const thumbID = recipe.info.thumbnailId;
            return (
                <div className='rep-detail'>
                    <div className='rep-d-header'>
                        <Paper className='rep-d-h-hero'
                            style={{ backgroundImage: "url(" + recipe.images[thumbID].link + ")" }}
                            zDepth={1}
                        />
                        <Paper className='rep-d-h-info' zDepth={1}>
                            <h2>{recipe.title}</h2>
                            <div className='rep-d-h-info-container'>
                                <div className='rep-time'>
                                    <FontIcon className="material-icons" style={iconStyles} color={deepPurple900}>alarm</FontIcon>
                                    {recipe.info.prepTime + "'"}
                                </div>
                                <div className='rep-serving'>
                                    <FontIcon className="material-icons" style={iconStyles} color={deepPurple900}>restaurant</FontIcon>
                                    {recipe.info.serving}
                                </div>
                                {/* <Divider /> */}
                                <div className='rep-calo'>{this.randomNumber()} KCal</div>
                                {/* <Divider /> */}
                            </div>
                            <div><TagList tags={recipe.tags} /></div>
                        </Paper>
                    </div>
                    <div className='rep-d-summary'>
                        <IngredientDetail
                            ingredients={recipe.ingredients}
                            ingredientList={this.props.ingredientList} />
                        <Paper className='rep-d-side-container'>
                            <div className='rep-d-s-text'><p>{recipe.info.shortInfo}</p></div>
                            {this.renderSpecialEquipment(recipe.instruction.equipment)}
                        </Paper>
                    </div>
                    <InstructionDetail recipe={recipe} />
                    <div className='rep-d-thread-devider' />
                    <ReactDisqusComments
                        shortname="foodrep"
                        identifier={"recipe-" + this.props.viewingRepID}
                        title={"Food Rep - " + recipe.title}
                        url={"https://test-food-rep.firebaseapp.com/recipe/" + this.props.viewingRepID}
                    />
                    {/* category_id="123456"  */}
                    {/* onNewComment={this.handleNewComment}  */}
                </div>
            );
        }
    }
}

RecipeDetail = connect((store) => {
    return {
        viewingRepID: store.food.viewingRepID,
        viewingRep: store.food.viewingRep,
        ingredientList: store.food.ingredientList
    }
})(RecipeDetail)

export default RecipeDetail;