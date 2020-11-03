/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import BlueButton from './comps/BlueButton';

const App = () => {
  return <View style={styles.container}>
    <BlueButton />
  </View>
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor:"red",
    justifyContent:"center",
    alignItems:"center",
  }
})

//export default App;
//Yina
// import React, { Component } from "react";
// import { View, Text, StyleSheet, ScrollView } from "react-native";
// import BlueButton from "../comps/button";
// import HomepageText from '../comps/Homepage';
// import AvailableinText from '../comps/AvailableinText';
// import FindaTutorText from "../comps/FindaTutorText";
// import GradientButton from '../comps/GradientButton';
// import OtherButton from "../comps/OtherButton";


// const App = () => {
//   return (
//     <ScrollView>
//     <BlueButton text="hello"/>,

//     <HomepageText text="Homepage"/>,

//     <AvailableinText text="Available in"/>,

//     <FindaTutorText text="Find a Tutor" text2="Choose up to three subjects in which you need help."/>,

//     <GradientButton text="REQUEST TUTORING"/>,

//     <OtherButton text="Other"/>
//     </ScrollView>
//   );

 

// };



// export default App;
//Yina


// import React, { Component } from "react";
// import { View, Text, StyleSheet, ScrollView } from "react-native";
// import BlueButton from "../comps/button";
// import AboutMe from "../comps/about";
// import AvailableIn from "../comps/available";
// import BackSignIn from "../comps/backSignIn";
// import BackStudent from "../comps/backStudent";
// import English from "../comps/english";

// const App = () => {
//   //return <BlueButton text="hello" />;
//   return ( 
//   <ScrollView>
//   <AboutMe text="Hi! My name is Becca Williams and I am a tutor. I have always tutored when I was at school and specia- lize in English and Arts. Let’s learn together!" />
//   <AvailableIn text="Available In" />
//   <BackSignIn text="Back to Sign in"/>
//   <BackStudent text="Jen Student" />
//   <English text="English" />
//   </ScrollView>

//   );
// };
// export default App;



export {default} from './storybook'; 