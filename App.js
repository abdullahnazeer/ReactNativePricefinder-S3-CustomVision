import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native'
import * as firebase from 'firebase'

import Routes from './src/Routes';

export default class App extends Component<{}> {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBXsEDs0AnO5elk2YSMW3urXDtA_eNGc0I",
      authDomain: "price-finder-d2ded.firebaseapp.com",
      databaseURL: "https://price-finder-d2ded.firebaseio.com",
      projectId: "price-finder-d2ded",
      storageBucket: "price-finder-d2ded.appspot.com",
      messagingSenderId: "259150417201"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Routes />
    );
  }
} 
