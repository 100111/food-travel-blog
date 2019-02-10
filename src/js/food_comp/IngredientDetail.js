import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

class IngredientDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ingredients, ingredientList } = this.props;

    if (Object.keys(ingredients).length > 0) {
      return <Paper className='rep-d-s-ingredients'>
        {Object.keys(ingredients).map((ingName, ingIndex) => {

          if (ingredientList[ingName] === undefined) {
            return <div key={ingIndex} className='rep-d-s-ingredient'>
              {ingName}
              {/*this is in case that special ing not exist in the database, just output the name*/}
            </div>
          } else {
            const { unit } = ingredientList[ingName];
            return <div key={ingIndex} className='rep-d-s-ingredient'>
              <div className='ingredient-name'>{ingName}</div>
              <div className='ingredient-amount'>{ingredients[ingName] + " " + unit}</div>
            </div>
          }
        })}
      </Paper>;
    }

    return (<div>lol</div>);
  }
}

export default IngredientDetail;