import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {deepPurple300} from 'material-ui/styles/colors';

import { Link } from 'react-router-dom';
import { viewRecipeDetail } from '../actions/foodActions'

class RecipePreview extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shadow: 1
    }
  }

  randomNumber() {
    return Math.round(Math.random() * 100) + 400;
  }

  RepCardView = (recipe, id, thumbID) => (
    <Card className='rep-card'
      onMouseOver={this.onMouseOver}
      onMouseOut={this.onMouseOut}
      onClick={this.viewRecipe}
      zDepth={this.state.shadow}
    >
      {/* style={{width: this.randomNumber()}} */}
      <CardMedia className='rep-card-media'>
        <div className='rep-card-img'
          style={{ backgroundImage: "url(" + recipe.images[thumbID].link + ")" }} />
        <div><FloatingActionButton className='rep-card-img-icon' backgroundColor={deepPurple300}>
          <ContentAdd />
        </FloatingActionButton></div>
      </CardMedia>
      {/* <Link to={"recipe/" + id}>
      </Link> */}
      <Link to={"recipe/" + id}>
        <CardTitle
          title={recipe.title}
          className='rep-card-title'
          style={{ paddingTop: 'auto' }}>
        </CardTitle>
      </Link>
    </Card>
  );

  onMouseOver = () => this.setState({ shadow: 3 });
  onMouseOut = () => this.setState({ shadow: 1 });
  viewRecipe = () => {
    //console.log(this.props);

    //this.props.dispatch(viewRecipeDetail(this.props.repid, this.props.recipe))
  }

  render() {
    return this.RepCardView(this.props.recipe, this.props.repid, this.props.recipe.info.thumbnailId)
  }
}

RecipePreview = connect((store) => {
  return {}
})(RecipePreview)

export default RecipePreview;