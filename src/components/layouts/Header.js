import React, {Component} from 'react';
import {Menu, Input, Button} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import UserProfile from '../auth/UserProfile';

const onClick = (e, data) => {
    //alert("hi" + e);
    console.log(e);
    console.log(data);
    console.log(e.target);
    console.log(e.target.value);
}

class Header extends Component {	
	render() {
        const auth = this.props.auth;
        const searchStock = (path) => {
            this.props.history.push(`/stock/${path}`);
        }
        var searchBoxValue = "";

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
                    <Input action={ <Button icon='search' content='Search' onClick={()=>searchStock(this.searchBoxValue)} />} placeholder='0001 or 0005 only' onChange={(e,data)=>{this.searchBoxValue = data.value}}  />
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

export default withRouter(Header);