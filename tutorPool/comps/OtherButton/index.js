import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

const OtherButton = ({text}) => {
    return <View >
        <TouchableOpacity
        style={styles.buttonBox}
        >
            <Text style={styles.description}>{text}</Text>
        </TouchableOpacity>
    </View>
}

const styles=StyleSheet.create({
    buttonBox: {
      marginTop:20,
        backgroundColor:"#FFFFFF",
        borderRadius:30,
        width:110,
        height:35.2,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        border: "3px solid #3A86FF",

    },
    description: {
        color:"#3A86FF",
        fontSize:18,
    }
});

OtherButton.defaultprops = {
    text:"Default",
}

OtherButton.propTypes = {
    text:propTypes.string,
}

export default OtherButton;