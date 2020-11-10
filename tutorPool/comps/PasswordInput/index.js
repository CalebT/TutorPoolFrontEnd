import React from 'react';
import {View, Text, TextInput, StyleSheet } from 'react-native';
import propTypes from 'prop-types';

const PasswordInput = ({name}) => {
    return <View>
        <Text style={styles.description}>{name}</Text>
        <TextInput secureTextEntry={true} style={styles.inputBox}/>
    </View>
}

const styles=StyleSheet.create({
    description: {
        fontWeight:"bold",
        fontSize:18,
    },

    inputBox: {
        backgroundColor:"#F4F5F5",
        width:300,
        borderRadius:10,
        marginTop:10,
    },
});

PasswordInput.defaultprops = {
    name:"Description",
}

PasswordInput.propTypes = {
    name:propTypes.string,
}

export default PasswordInput;