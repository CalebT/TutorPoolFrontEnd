import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import SmallBubbleBlack from '../SmallBubbleButtonBlack';

const AboutInput = ({name}) => {
    return <View>
        <TouchableOpacity style={styles.about}>
        <Text style={styles.description}>{name}</Text>
        <TouchableOpacity style={styles.Arrow}>
        <Image source={require('../../images/pencil.png')}></Image>
        </TouchableOpacity>
        </TouchableOpacity>
        <TextInput TextEntry={true} style={styles.inputBox}/>
    </View>
}

const styles=StyleSheet.create({
    about: {
        flexDirection: "row",
        alignItems: "center",

    },

    description: {
        fontWeight:"500",
        fontSize:18,
        marginRight: 10,
    },

    inputBox: {backgroundColor:"#F4F5F5",
    width:300,
    borderRadius:10,
    borderColor: "#000",
    borderWidth: 1,
    marginTop:10,
    padding: 10,
        
    },
});

AboutInput.defaultprops = {
    name:"Description",
}

AboutInput.propTypes = {
    name:propTypes.string,
}

export default AboutInput;