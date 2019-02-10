import React from 'react'
import ReactDOM from 'react-dom'
import * as firebase from 'firebase';

import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './js/configStore'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import { deepPurple500, deepPurple700, grey400 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Header from './js/layout_comp/Header';
import Footer from './js/layout_comp/Footer';
import Landing from './js/layout_comp/Landing';
import FoodView from './js/food_comp/FoodView';
import ReviewView from './js/review_comp/ReviewView';
import RecipeView from './js/food_comp/RecipeView';
import TravelView from './js/travel_comp/TravelView';
import './css/index.css'
import './css/layout.css'


//const myHistory = createHistory();
//Middleware, remove the logger when deploy
//const middleware = applyMiddleware(routerMiddleware(myHistory), logger());

//Create the store
//const store = createStore(reducers, middleware)
const store = configureStore(/* provide initial state if any */);

//Firebase connection
var fbConfig = {
  apiKey: "AIzaSyCTwUIs0lBlZvJCOmPJm8uQOFPWeBW0RQY",
  authDomain: "test-food-rep.firebaseapp.com",
  databaseURL: "https://test-food-rep.firebaseio.com",
  storageBucket: "test-food-rep.appspot.com",
  messagingSenderId: "127278418077"
};

firebase.initializeApp(fbConfig);

//Theme
const muiTheme = getMuiTheme({
  // palette: {
  //   primary1Color: deepPurple500,
  //   primary2Color: deepPurple700,
  //   primary3Color: grey400
  // },
  appBar: {
    height: 50,
  },
})

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div id='app'>
          <Header />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/food' component={FoodView} />
            <Route path='/review' component={ReviewView} />
            <Route path='/travel' component={TravelView} />
            <Route path="/recipe/:repid" component={RecipeView} />
          </Switch>
          <Footer />
        </div>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
