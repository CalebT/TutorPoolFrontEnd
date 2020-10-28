import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import propTypes from 'prop-types';

const DeleteButton = ({text}) => {
    return <View >
        <TouchableOpacity
        style={styles.buttonBox}
        >
            <Image style={styles.x} source={require('../../images/x-circle.png')} />
            <Text style={styles.description}>{text}</Text>
        </TouchableOpacity>
    </View>
}

const styles=StyleSheet.create({
    buttonBox: {
        display:"flex",
        flexDirection:"row",
        alignContent:"space-between",
        backgroundColor:"#F4F5F5",
        borderRadius:25,
        width:200,
        height:40,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

    },
    description: {
        fontSize:16,
        color:"#FF3030",
        position:"absolute",
        right:25
    },
    x: {
        position:"absolute",
        left:10,
    }
});

DeleteButton.defaultprops = {
    text:"Default",
}

DeleteButton.propTypes = {
    text:propTypes.string,
}

export default DeleteButton;