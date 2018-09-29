import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {constantAction} from './actions/constantAction';
import {Button} from 'semantic-ui-react';

import Home from './components/Dummy1';
import About from './components/Dummy2';


const handleAuthentication = (auth, nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
  componentDidMount(){
  }

  
  

  simpleAction = (event) => {
    this.props.constantAction();
  }
  
  

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/about-us">About us</Link>
          {
              !isAuthenticated() ? 
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.props.auth.login.bind(this)}
                >
                  Log In
                </Button>
                :
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.props.auth.logout.bind(this)}
                >
                  Log Out
                </Button>
              
          }
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <Route path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          
          <Route path="/callback" render={(props) => {
            handleAuthentication(this.props.auth, props);
            return <Home {...props} /> 
          }} />
          <p className="App-intro">
            Redux Template

            
            
          
          </p>
          <button onClick={this.simpleAction}>Test redux action</button>
          
          {/* <pre>
          {
            JSON.stringify(this.props)
          }
          </pre> */}
        </main>
      </div>
    );
  }
}



const mapStateToPros = state => ({
  ...state
 })

 
const mapDispatchToProps = dispatch => ({
  constantAction: () => dispatch(constantAction())
 })

export default connect(mapStateToPros, mapDispatchToProps) (App);
