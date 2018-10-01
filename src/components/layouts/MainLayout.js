import React, { Component } from 'react';
import { ConnectedRouter  } from 'connected-react-router';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';


import { history }  from '../../store';

import Header from './Header';
import Home from '../Dummy1';
import About from '../Dummy2';
import LoginCallback from '../LoginCallback';
import StockView from '../StockView';
import UserProfile from '../auth/UserProfile';

import {Menu, Container} from 'semantic-ui-react';

const handleAuthentication = (auth, nextState, replace) => {
	if (/access_token|id_token|error/.test(nextState.location.hash)) {
	  auth.handleAuthentication();
	}
  }

  

class Routes extends Component{
	
	render(){
		const auth = this.props.auth;
		return (
			<Switch>		
				<Route path="/callback" render={(props) => {
					console.log(props);
					handleAuthentication(auth, props);
					return <LoginCallback {...props} /> 
				}}/>
				<Route path="/stock/:id" component={StockView} />
				<Route exact path="/about-us" component={About} />
				<Route path="/" component={Home} />
			</Switch>
		);
	}
}


class MainLayout extends Component {
	render() {
		console.log("Main layout");
		return (
			<div className="MainLayout">
				<ConnectedRouter history={history}>
					<React.Fragment>
						<Header auth={ this.props.Auth }/>
						
						<Container text style={{ marginTop: '5em' }}>
							<Routes auth={ this.props.Auth }/>
						</Container>
					</React.Fragment>
				</ConnectedRouter>
			</div>
		);
	}
}

export default MainLayout;
