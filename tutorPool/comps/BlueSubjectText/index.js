import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import propTypes from "prop-types";

const BlueSubjectText = ({ text }) => {
  return (
    <View>
      <TouchableOpacity style={styles.Box}>
      <TouchableOpacity>
          <Text style={styles.Text}>{text}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Arrow}>
        <Image source={require('../../images/blue-x-circle.png')}></Image>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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
