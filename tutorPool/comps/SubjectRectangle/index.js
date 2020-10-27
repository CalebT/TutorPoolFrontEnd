import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

const SubjectRectangle = ({text}) => {
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
        elevation:10,
        borderRadius:10,
        width:193,
        height:90,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

    },
    description: {
        fontSize:16,
    }
});

SubjectRectangle.defaultprops = {
    text:"Default",
}

SubjectRectangle.propTypes = {
    text:propTypes.string,
}

export default SubjectRectangle;