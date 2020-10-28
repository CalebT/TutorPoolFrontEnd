import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import propTypes from 'prop-types';

const UserCard = ({text1, text2}) => {
    return <View >
        <TouchableOpacity style={styles.buttonBox}>
            <View style={styles.imageCont}>
                <Image></Image>
            </View>
            <Text style={styles.name}>{text1}</Text>
            <Text style={styles.description}>{text2}</Text>
        </TouchableOpacity>
    </View>
}

const styles=StyleSheet.create({
    buttonBox: {
        backgroundColor:"white",
        borderRadius:10,
        elevation:10,
        width:281,
        height:100,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },

    name: {
        fontSize:16,
        fontWeight:"bold",
        position:"absolute",
        left:45,
        top:25,
    },

    description: {
        fontSize:14,
        position:"absolute",
        left:45,
        top:50,
    },

    imageCont: {
        position:"absolute",
        left:-30,
        width:60,
        height:60,
        borderRadius:50,
        backgroundColor:"red",
    }
});

UserCard.defaultprops = {
    text1:"Default",
    text2:"Default",
    source:"placeholder"
}

UserCard.propTypes = {
    text1:propTypes.string,
    text2:propTypes.string,
    source:propTypes.string,
}

export default UserCard;