import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

const SubjectBubbleFull = ({text}) => {
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
        borderColor:"#595CFF",
        borderWidth:3,
        borderRadius:30,
        width:110,
        height:35,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

    },
    description: {
        fontSize:16,
        color:"white"
    }
});

SubjectBubbleFull.defaultprops = {
    text:"Default",
}

SubjectBubbleFull.propTypes = {
    text:propTypes.string,
}

export default SubjectBubbleFull;