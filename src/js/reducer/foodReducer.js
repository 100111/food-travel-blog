const foodReducerInitialState = {
  isInThisView: false,
  haveRep: 0, // Loading
  viewingRepID: -1, // Not in viewing mode
  ingredientList: {}
}

export const foodReducer = (state = foodReducerInitialState, action) => {
  switch (action.type) {
    case 'RECIPES_CHANGED':
      return {
        ...state,
        haveRep: 1,
        recipes: action.payload
      }
    case 'INGREDIENT_CHANGED':
      return {
        ...state,
        ingredientList: action.payload
      }
    case 'VIEW_RECIPE':
      return {
        ...state,
        viewingRep: action.payload.recipe,
        viewingRepID: action.payload.id
      }
    case 'VIEW_RECIPE_LOADED':
      return {
        ...state,
        viewingRep: action.payload.recipe,
        viewingRepID: action.payload.id
      }  
    default:
      return state
  }
}