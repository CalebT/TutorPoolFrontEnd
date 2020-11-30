import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

const SmallBubbleFull = ({text}) => {

    return <View >
        <View
        style={styles.buttonBox}
        >
            <Text             
            style={styles.description}
            >
                {text}</Text>
        </View>
    </View>
}

const styles=StyleSheet.create({
    buttonBox: {
        backgroundColor:"#595CFF",
        borderRadius:30,
        width:85,
        height:25,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

    },
    description: {
        fontSize:12,
        color:"white"
    }
});

SmallBubbleFull.defaultprops = {
    text:"Default",
}

SmallBubbleFull.propTypes = {
    text:propTypes.string,
}

export default SmallBubbleFull;