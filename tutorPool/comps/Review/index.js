import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import propTypes from "prop-types";

const Review = ({ text1, text2, text3 }) => {
  return (
    <View>
      <TouchableOpacity style={styles.Box}>
        <View style={styles.name}>
        <Text style={styles.title}>{text2}</Text>
        <Image style={styles.star} source={require('../../images/star.png')}></Image>
        <Text style={styles.title}>{text3}</Text>
        </View>
        <Text style={styles.description}>{text1}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Box: {
    width: 300,
    display: "flex",
  },
  title: {
    fontSize: 18,
    margin: 10,
    color:"#595CFF",
    fontWeight:"bold",
  },
  description: {
    color: "#000",
    fontSize: 15,
    margin: 10
  },

  star: {
    height:15,
    width:15,
    marginLeft:100,
},

name:{
    flexDirection:"row",
    alignItems:"center",

}

});

Review.defaultprops = {
  text: "This is A Description"
};
Review.propTypes = {
  text: propTypes.string
};

export default Review;
