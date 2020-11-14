import React from 'react';
import {View, Text, TextInput, StyleSheet } from 'react-native';
import propTypes from 'prop-types';

const LoginInput = ({name}) => {
    return <View>
        <Text style={styles.description}>{name}</Text>
        <TextInput style={styles.inputBox}/>
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
        height: 50,
        borderRadius:10,
        marginTop:10,
    },
});

LoginInput.defaultprops = {
    name:"Description",
}

LoginInput.propTypes = {
    name:propTypes.string,
}

export default LoginInput;