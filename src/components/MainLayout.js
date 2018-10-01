import React, { Component } from 'react';
import { ConnectedRouter  } from 'connected-react-router';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';


import { history }  from '../store';

import Home from './Dummy1';
import About from './Dummy2';
import LoginCallback from './LoginCallback';

import UserProfile from './auth/UserProfile';

import {Menu} from 'semantic-ui-react';

class Header extends Component {	
	render() {
		const auth = this.props.auth;

		return (
			<div>
				<Menu inverted>
						<Menu.Item as={Link} to="/">Tab 1</Menu.Item>
						<Menu.Item as={Link} to="/about-us">Tab 2</Menu.Item>

						{
							auth.isAuthenticated() ? 
							(
								<React.Fragment>
									<Menu.Item as='a' header>
									<UserProfile auth={auth} />          		
        							</Menu.Item>
									
									<Menu.Item position='right' onClick={ auth.logout }>Logout</Menu.Item>
								</React.Fragment>
							)
							:
							(<Menu.Item position='right' onClick={ auth.login } >Login</Menu.Item>)
						}
				</Menu>
		</div>
		)
	}
};


const handleAuthentication = (auth, nextState, replace) => {
	console.log("Handle Auth ");
	console.log(nextState);
	console.log(replace);
	if (/access_token|id_token|error/.test(nextState.location.hash)) {
	  auth.handleAuthentication();
	}
  }

  

class Main extends Component{
	
	render(){
		const auth = this.props.auth;
		return (
			<Switch>		
				<Route path="/callback" render={(props) => {
					console.log(props);
					handleAuthentication(auth, props);
					return <LoginCallback {...props} /> 
				}}/>
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
					<div>
						<Header auth={ this.props.Auth }/>
						<Main auth={ this.props.Auth }/>
					</div>
				</ConnectedRouter>
			</div>
		);
	}
}

export default MainLayout;
