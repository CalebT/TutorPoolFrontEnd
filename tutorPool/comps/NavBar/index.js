import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import propTypes from 'prop-types';
import { useEffect, useState } from 'react';


const NavBar = ({text}) => {
    return <View>
        <View style={styles.navbarContainer}>
            <Image 
                style={styles.img}
                source={require('../../images/home.png')}
            />
            <Image 
                style={styles.img}
                source={require('../../images/message-circle.png')}
            />
            <Image
                style={styles.img} 
                source={require('../../images/bell.png')}
            />
            <Image 
                style={styles.img}
                source={require('../../images/user.png')}
            />
        </View>
            <Text style={styles.description}>{text}</Text>
    </View>
}

const styles=StyleSheet.create({
    navbarContainer: {
        backgroundColor:"#F4F5F5",
        width: 360,
        height: 60,
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection: "row",
        padding: 30

    },
    description: {
        color:"white",
        fontSize:18,
    },

    img: {
        width: 30,
        height: 30
    }
});

NavBar.defaultprops = {
    text:"Default",
}

NavBar.propTypes = {
    text:propTypes.string,
}

export default NavBar;