import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import propTypes from 'prop-types';

const UserCard = ({text1, text2, profilePic}) => {
    return <View style={styles.compCont}>
        <TouchableOpacity style={styles.buttonBox}>
            <View style={styles.imageCont}>
                <Image style={styles.image} source={profilePic}></Image>
            </View>
            <Text style={styles.name}>{text1}</Text>
            <Text style={styles.description}>{text2}</Text>
            <View style={styles.clipCont}>
                <Image source={require('../../images/clipboard.png')} />
            </View>
        </TouchableOpacity>
    </View>
}

const styles=StyleSheet.create({
    compCont:{
        margin:10,
        paddingLeft:25,
    },

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
        bottom:12,
        width:60,
        height:60,
        borderRadius:50,
    },

    image: {
        resizeMode:'contain',
        maxWidth:60,
        top:-10,
    },

    clipCont: {
        position:'absolute',
        right:-30,
    }
});

UserCard.defaultProps = {
    text1:"Default",
    text2:"Default",
    profilePic: "",

}

UserCard.propTypes = {
    text1:propTypes.string,
    text2:propTypes.string,
    source:propTypes.string,
}

export default UserCard;