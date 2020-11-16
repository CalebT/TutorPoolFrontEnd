import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import propTypes from 'prop-types';

const ChatContainerR = ({text}) => {
    return <View 
        style={styles.ChatContainer}
        >
           <Text style={styles.description}>{text}</Text> 
    </View>
}

const styles=StyleSheet.create({
    ChatContainer: {
        backgroundColor: "#377DFF",
        borderRadius:8,
        width:200,
        height:39,
        color:"white",
        
  

    },

    description:{
        color:"white",
textAlign:"center",
    }
 
});

ChatContainerR.defaultprops = {
    text:"Default",
}

ChatContainerR.propTypes = {
    text:propTypes.string,
}

export default ChatContainerR;