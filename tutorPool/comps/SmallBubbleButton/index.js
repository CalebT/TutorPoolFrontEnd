import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

const SmallBubble = ({text}) => {
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
        backgroundColor:"white",
        borderColor:"#595CFF",
        borderWidth:1,
        borderRadius:30,
        width:85,
        height:25,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

    },
    description: {
        fontSize:12,
        color:"#595CFF"
    }
});

SmallBubble.defaultprops = {
    text:"Default",
}

SmallBubble.propTypes = {
    text:propTypes.string,
}

export default SmallBubble;