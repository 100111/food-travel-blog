import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router-dom';
import { push } from 'react-router-redux';

import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';

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

    render1() {
        document.title = this.props.title;

        var styles = {
            appBar: {
                flexWrap: 'wrap',
            },
            tabs: {
                width: '100%',
            },
        };

        console.log(this.checkCurrentTab());


        return <AppBar title={this.props.title} style={styles.appBar} className='header-title' >

            {/* iconElementLeft={<Avatar>T</Avatar>} */}
            <Tabs onChange={this.handleChange} style={styles.tabs} className='header-tabs' value={this.checkCurrentTab()}>
                <Tab label={'Home'} value='home' />
                <Tab label={'Food'} value='food' />
                <Tab label={'Travel'} value='travel' />
            </Tabs>
        </AppBar>;
    }

    render2() {
        return (
            <header id='header'>
                <h2>Food!</h2>
                <ol className="menu">
                    <li><IndexLink to='/' activeClassName="active">Home</IndexLink></li>
                    <li><Link to='/food' activeClassName="active" className={this.isURLAboutFood()}>Food</Link></li>
                    <li><Link to='/travel' activeClassName="active">Travel</Link></li>
                </ol>
            </header>
        );
    }

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