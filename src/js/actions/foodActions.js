export function recipeChanged(snapshot) {
  return {
    type: "RECIPES_CHANGED",
    payload: snapshot.val()
  }
}

export function ingredientChanged(snapshot) { 
  return {
    type: "INGREDIENT_CHANGED",
    payload: snapshot.val()
  }
}

export function viewRecipeDetail(id, recipe) {
  return {
    type: "VIEW_RECIPE",
    payload: {'id': id, 'recipe': recipe}
  }
}

export function recipeDetailLoaded(id, recipe) {
  return {
    type: "VIEW_RECIPE_LOADED",
    payload: {'id': id, 'recipe': recipe}
  }
}