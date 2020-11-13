import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import propTypes from "prop-types";

const TopNav = ({ text }) => {
  return (
    <View>
      <TouchableOpacity style={styles.Box}>
      <TouchableOpacity style={styles.Menu}>
        <Image source={require('../../images/menu.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Logo}>
        <Image source={require('../../images/LogoSmall.png')}></Image>
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
    justifyContent: "space-between"
  },

  Menu: {
      marginRight: 150,
  }

      
  

});

TopNav.defaultprops = {
  text: null
};

TopNav.propTypes = {
  text: propTypes.string
};

export default TopNav;
