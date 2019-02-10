import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link, IndexLink } from 'react-router-dom';
import { push } from 'connected-react-router'

import StackNavBar from '../stack_comp/NavBar'

import '../../css/header.css';

class Header extends Component {
    checkCurrentTab() {
        var currentTab = "home";
        switch (this.props.currentViewMode) {
            case 1:
                currentTab = "food";
                break;
            case 2:
                currentTab = "travel";
                break;
            case 3:
                currentTab = "review";
                break;
            default:
                break;
        }
        return currentTab;
    }

    handleChange = (value) => {
        console.log(value);

        switch (value) {
            case 'home':
                this.props.dispatch(push('/'));
                break;
            case 'food':
                this.props.dispatch(push('/food'));
                break;
            case 'travel':
                this.props.dispatch(push('/travel'));
                break;
        }
    };

    render() { // Use Stack Theme
        document.title = this.props.title;

        console.log(this.checkCurrentTab());

        var styles = {
            tabs: {
                width: '100%',
            },
        };

        return (<StackNavBar currentSection={this.props.currentViewMode}></StackNavBar>);
    }
}

Header = connect((store) => {
    return {
        title: store.general.title,
        currentViewMode: store.general.currentViewMode,
        viewingRepID: store.food.viewingRepID
    }
})(Header)

export default Header;