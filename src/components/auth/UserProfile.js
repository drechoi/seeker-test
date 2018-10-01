import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';

class UserProfile extends Component{
    componentWillMount(){
        this.setState({ profile:{} });
        const { userProfile, getProfile } = this.props.auth;

        if(!userProfile){
            getProfile((err, profile) => {
                this.setState({ profile });
            });
        } else {
            this.setState({profile: userProfile});
        }
    }

    render(){
        const {profile} = this.state;
        return (
            <React.Fragment>
                <Image size='mini' src={profile.picture} alt="profile"  style={{ marginRight: '1.5em' }} />
                
                Welcome {profile.nickname}
            </React.Fragment>
        );
    }
}

export default UserProfile;