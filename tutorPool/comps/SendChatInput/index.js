import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import SmallBubbleBlack from '../SmallBubbleButtonBlack';

const SendChatInput = ({name}) => {
    return <View style={styles.Wrapper}>
        
        
       
        <TextInput placeholder="Ask your question..." TextEntry={true} style={styles.inputBox}/>
        <TouchableOpacity style={styles.Button}>
            <Image source={require('../../images/chatbutton.png')}></Image>
        </TouchableOpacity>
    </View>
}

const styles=StyleSheet.create({
    Button: {
        paddingLeft:10,


    },

    inputBox: {backgroundColor:"#F4F5F5",
    width:257,
    height:50,
    borderRadius:30,
    borderColor: "#000",
    borderWidth: 1,
    paddingLeft:10,
    
        
    },
    Wrapper:{
        flexDirection:"row",
        display:"flex",
        alignContent:"center",
    }
});

SendChatInput.defaultprops = {
    name:"Description",
}

SendChatInput.propTypes = {
    name:propTypes.string,
}

export default SendChatInput;