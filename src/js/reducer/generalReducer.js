const generalReducerInitialState = {
  title: 'Food Rep',
  currentViewMode: 0, // 0: landing, 1: food, 2:reviews , 3: travel
}

export const generalReducer = (state = generalReducerInitialState, action) => {
  switch (action.type) {
    case 'RECIPES_CHANGED':
      return {
        ...state,
        currentViewMode: 1,
        title: 'Food Rep'
      }
    case 'VIEW_RECIPE_LOADED':
      return {
        ...state,
        currentViewMode: 1,
        title: "Food Rep - " + action.payload.recipe.title
      }
    case '@@router/LOCATION_CHANGE':
      var viewMode = 0;
      switch (action.payload.pathname) {
        case "/food":
          viewMode = 1
          break;
        case "/recipe":
          viewMode = 1
          break;
        case "/travel":
          viewMode = 3;
          break;
        case "/review":
          viewMode = 2;
          break;
        default:
          viewMode = 0;
          break;
      }
      return {
        ...state,
        currentViewMode: viewMode
      }
    default:
      return state
  }
}