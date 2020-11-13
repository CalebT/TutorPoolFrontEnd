import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import SmallBubbleBlack from '../SmallBubbleButtonBlack';

const OtherSubjectInput = ({name}) => {
    return <View>
        <TouchableOpacity style={styles.box}>
        <Text style={styles.description}>{name}</Text>
        <TextInput TextEntry={true} style={styles.inputBox}/>
        </TouchableOpacity>
    </View>
}

const styles=StyleSheet.create({

    box: {
        flexDirection: "row",
        alignItems: "center",
    
    },

     description: {
        fontWeight:"500",
        fontSize:18,
        marginRight: 10,
    },

    inputBox: {
        backgroundColor:"#F4F5F5",
        width: 150,
        borderRadius:10,
        padding:10,
    },
});

OtherSubjectInput.defaultprops = {
    name:"Description",
}

OtherSubjectInput.propTypes = {
    name:propTypes.string,
}

export default OtherSubjectInput;