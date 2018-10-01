import React, {Component} from 'react';
import {Menu, Input} from 'semantic-ui-react';
import UserProfile from '../auth/UserProfile';

const onClick = (e) => {
    alert("hi" + e);
}

class Header extends Component {	
	render() {
		const auth = this.props.auth;

		return (
			<div>
				<Menu inverted fixed='top' >
                {
                    auth.isAuthenticated() && (
                        <Menu.Item as='a' header>
                            <UserProfile auth={auth} />          		
                        </Menu.Item>
                    )
                }
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' size='tiny' onClick={onClick} />
                </Menu.Item>

                {
                    auth.isAuthenticated() ? 
                    (
                        <React.Fragment>
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

export default Header;