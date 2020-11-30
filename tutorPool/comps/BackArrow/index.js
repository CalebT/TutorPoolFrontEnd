import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import propTypes from "prop-types";

const BackArrow = ({ text, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.Box} onPress={onPress}>
        <View style={styles.Arrow}>
        <Image source={require('../../images/arrow-left.png')}></Image>
        </View>
          <Text style={styles.Text}>{text}</Text>
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
  Arrow: {
    width: 20,
    height: 15
  

  },

  Text: {
   paddingTop: 10,
   marginLeft: 10,
   fontSize: 22,

  }
});

BackArrow.defaultprops = {
  text: "Default",
  onPress:()=>{}
};

BackArrow.propTypes = {
  text: propTypes.string
};

export default BackArrow;
