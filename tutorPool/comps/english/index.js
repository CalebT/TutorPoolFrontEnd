import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import propTypes from "prop-types";

const English = ({ text }) => {
  return (
    <View>
      <TouchableOpacity style={styles.Box}>
        <Text style={styles.Eng}>{text}</Text>
        <TouchableOpacity style={styles.Circle}>
          <img src="/x-circle.png" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Box: {
    width: 800,
    flexDirection: "row",
    margin: 5
  },
  Eng: {
    margin: 5,
    color: "#595CFF",
    fontSize: 18
  },
  Circle: {
    width: 20
  }
});

English.defaultprops = {
  text: "Default"
};

English.propTypes = {
  text: propTypes.string
};

export default English;
