import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Icon, Body, Text, Form, Item, Input, Label, Spinner } from 'native-base';

import firebase from 'react-native-firebase';

// rules_version = '2';
// service cloud.firestore {
//   match / databases / { database } / documents {
//     match / { document=**} {
//       allow read, write;
//     }
//   }
// }
var firebaseConfig = {
  apiKey: "AIzaSyD5SK5js8alQ_JE2Dqz3NiFB7Hs8nvKGJk",
  authDomain: "expo-ec.firebaseapp.com",
  databaseURL: "https://expo-ec.firebaseio.com",
  projectId: "expo-ec",
  storageBucket: "expo-ec.appspot.com",
  messagingSenderId: "979611158988",
  appId: "1:979611158988:web:707334eb030667a7"
};
firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
