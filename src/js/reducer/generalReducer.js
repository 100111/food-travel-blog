const generalReducerInitialState = {
  title: 'Food Rep',
  banner: {
    text: `Hi, welcome to my `,
    typedText: ['website', 'blog', 'site about food', 'site about travel', 'site for reviews', 'life :)'],
    subText: `...`,
    bgImg: `third_party/img/work-2.jpg`,
    bgHeight: 100
  },
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
      let viewMode = 0;
      let newBanner = { ...generalReducerInitialState.banner };

      let path = action.payload.location.pathname;
      if (path.startsWith("/recipe")) path = "/recipe"

      switch (path) {
        case "/food":
        case "/recipe":
          viewMode = 1
          newBanner.text = "My Recipes"
          newBanner.typedText = [];
          newBanner.bgImg = "third_party/img/landing-14.jpg";
          newBanner.bgHeight = 50;
          break;
        case "/travel":
          viewMode = 3;
          newBanner.text = "My Travel Diary"
          newBanner.typedText = [];
          newBanner.bgImg = "third_party/img/landing-1.jpg";
          //newBanner.bgHeight = 80;
          break;
        case "/review":
          viewMode = 2;
          newBanner.text = "My Reviews"
          newBanner.typedText = [];
          newBanner.subText = "Strange things around the world :)"
          newBanner.bgImg = "third_party/img/landing-14.jpg";
          //newBanner.bgHeight = 80;
          break;
        default:
          viewMode = 0;
          break;
      }

      return {
        ...state,
        currentViewMode: viewMode,
        banner: newBanner
      }
    default:
      return state
  }
}