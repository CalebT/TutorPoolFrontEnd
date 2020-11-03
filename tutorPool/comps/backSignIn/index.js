import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import propTypes from "prop-types";

const SignIn = StyleSheet.create({
  color:000,
  }
  `;

const BackSignIn = () => {
  return (
    <SignIn>
      <Text>jkkkk</Text>
    </SignIn>
  );
};

BackSignIn.defaultprops = {
  text: "Default"
};

BackSignIn.propTypes = {
  text: propTypes.string
};

export default BackSignIn;
