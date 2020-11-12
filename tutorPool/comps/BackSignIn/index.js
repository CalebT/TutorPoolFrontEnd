import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import propTypes from "prop-types";


const BackSignIn = () => {
  return (
    <View>
      <Text>jk</Text>
    </View>
  );
};

BackSignIn.defaultprops = {
  text: "Default"
};

BackSignIn.propTypes = {
  text: propTypes.string
};

export default BackSignIn;
