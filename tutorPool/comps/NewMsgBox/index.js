import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import propTypes from 'prop-types';


const NewMsgBox = ({text1, text2, text3, profilePic, onPress}) => {
    return <View >
        <TouchableOpacity style={styles.buttonBox} onPress={onPress}>
            <View style={styles.imageCont}>
                <Image style={styles.image} source={profilePic}></Image>
            </View>

            <View style={styles.title}>
            <Text style={styles.name}>{text1}</Text>
            </View>
            <Text style={styles.chatmsg}>{text2}</Text>
            <Text style={styles.time}>{text3}</Text>
            <Image style={styles.msg} source={require('../../images/message.png')}></Image>
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
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 1,  
    },

    chatmsg: {
        fontSize:14,
        position:"absolute",
        left:45,
        top:50,
        color:"#576060",
    },

    imageCont: {
        position:"absolute",
        left:-30,
        width:60,
        height:60,
        borderRadius:50,
        backgroundColor:"white",
    },
    image: {
        resizeMode:'contain',
        maxWidth:60,
    },

    title: {
        display:"flex",
        flexDirection:"row",
        position:"absolute",
        top:20,
        left:45,

    },

    name: {
        fontSize:16,
        fontWeight:"500",
    },


    msg: {
        position:"absolute",
        right:-30,

    },

    time: {
        fontWeight:"500",
        fontSize:12,
        position:"absolute",
        top:75,
        left:45,
    }
});

NewMsgBox.defaultProps = {
    text1:"Default",
    text2:"Default",
    text3:"Default",
    profilePic:'',
    onPress:()=>{}
}

NewMsgBox.propTypes = {
    text1:propTypes.string,
    text2:propTypes.string,
    source:propTypes.string,
}

export default NewMsgBox;