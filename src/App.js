import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Header from './components/header/header';
import SignInSignOut from './containers/signIn-signOut/signIn-signOut';
import HomePage from './containers/homepage/homepage';
import ShopPage from './containers/shop/shop';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            }
          });

          console.log(this.state)

        })
      }

      else {
        this.setState({ currentUser: userAuth });
      }

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signin' component={SignInSignOut} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/shop/hats' component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
