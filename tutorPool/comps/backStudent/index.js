import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import propTypes from "prop-types";

const BackStudent = ({ text }) => {
  return (
    <View>
      <TouchableOpacity style={styles.Box}>
        <TouchableOpacity style={styles.Arrow}>
          <img src="/arrow-left.png" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Student}>
          <Text>{text}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Box: {
    width: 100,
    display: "flex",
    justifyContent: "flexStart",
    margin: 5
  },
  Arrow: {
    width: 20,
    height: 15
  }
});

BackStudent.defaultprops = {
  text: "Default"
};

BackStudent.propTypes = {
  text: propTypes.string
};

export default BackStudent;
