import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import propTypes from "prop-types";

const BackStudent = ({ text }) => {
  return (
    <View>
      <TouchableOpacity style={styles.Box}>
        <TouchableOpacity style={styles.Arrow}>
        <Image source={require('../../images/arrow-left.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Student}>
          <Text style={styles.Text}>{text}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Box: {
    width: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Arrow: {
    width: 20,
    height: 15

  },

  Text: {
   paddingTop: 10,
   marginLeft: 10,

  }
});

BackStudent.defaultprops = {
  text: "Default"
};

BackStudent.propTypes = {
  text: propTypes.string
};

export default BackStudent;
