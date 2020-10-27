import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

const SubjectSquare = ({text}) => {
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
        borderWidth:3,
        borderColor:"#595CFF",
        borderRadius:10,
        width:90,
        height:90,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

    },
    description: {
        fontSize:16,
    }
});

SubjectSquare.defaultprops = {
    text:"Default",
}

SubjectSquare.propTypes = {
    text:propTypes.string,
}

export default SubjectSquare;