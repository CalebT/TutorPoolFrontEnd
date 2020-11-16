import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import propTypes from "prop-types";

const TopNav = ({onPress1, onPress2}) => {
  return (
    <View>
      <View style={styles.Box}>
      <TouchableOpacity style={styles.Menu} onPress={onPress1}>
        <Image source={require('../../images/menu.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Logo} >
        <Image source={require('../../images/LogoSmall.png')} onPress={onPress2}></Image>
        </TouchableOpacity>
      </View>
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
  onPress1:()=>{},
  onPress2:()=>{}
};


export default TopNav;
