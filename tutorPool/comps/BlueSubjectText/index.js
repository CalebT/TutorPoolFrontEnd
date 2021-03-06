import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import propTypes from "prop-types";

const BlueSubjectText = ({ text }) => {
  return (
      <View style={styles.Box}>
        <Text style={styles.Text}>{text}</Text>
        <TouchableOpacity style={styles.Arrow}>
          <Image source={require('../../images/blue-x-circle.png')}></Image>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  Box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin:10,
  },

  Text: {
  color: "#595CFF",
  fontWeight: "bold",
   margin:5,
   padding:5

  }
});

BlueSubjectText.defaultprops = {
  text: "English"
};

BlueSubjectText.propTypes = {
  text: propTypes.string
};

export default BlueSubjectText;
