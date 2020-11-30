import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import propTypes from "prop-types";

const AboutMe = ({ text }) => {
  return (
    <View>
      <View style={styles.AboutMe}>
        <Text style={styles.title}>About me</Text>
        <Text style={styles.description}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AboutMe: {
    width: 300,
    display: "flex"
  },
  title: {
    color: "#000",
    fontSize: 18,
    margin: 10,
    marginBottom:0,
    fontWeight: "400"
  },
  description: {
    color: "#000",
    fontSize: 15,
    margin: 10
  }
});

AboutMe.defaultprops = {
  text: "This is A Description"
};
AboutMe.propTypes = {
  text: propTypes.string
};

export default AboutMe;
