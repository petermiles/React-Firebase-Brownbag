import React, { Component } from 'react';
import firebase from '../../fire';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      userid: '',
    };
    this.createAccount = this.createAccount.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.signOutUser = this.signOutUser.bind(this);
  }

  createAccount() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((result) => {
        this.setState({ userid: result.uid });
      });
  }

  loginUser() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((result) => {
        console.log(result);
      });
  }

  signOutUser() {
    firebase.auth().signOut();
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((result) => {
      console.log(result);
    });
  }

  render() {
    return (
      <div>
        {this.state.userid && <h1>{this.state.userid}</h1>}
        <input
          type="text"
          placeholder="email"
          onChange={(event) => {
						this.setState({ email: event.target.value });
					}}
        />

        <input
          type="password"
          placeholder="password"
          onChange={(event) => {
						this.setState({ password: event.target.value });
					}}
        />

        <button onClick={this.createAccount}> Create Account </button>
        <button onClick={this.loginUser}>Login</button>
        <button onClick={this.signOutUser}>Sign Out</button>
      </div>
    );
  }
}
