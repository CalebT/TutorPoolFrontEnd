import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

const BlueButton = ({text}) => {
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
        backgroundColor:"#595CFF",
        borderRadius:10,
        width:300,
        height:50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

    },
    description: {
        color:"white",
        fontSize:18,
    }
});

BlueButton.defaultprops = {
    text:"Default",
}

BlueButton.propTypes = {
    text:propTypes.string,
}

export default BlueButton;