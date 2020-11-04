import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

const TutorName = () => {
    return <View style={styles.tutorNameContainer}>
        
    </View>
}

const styles=StyleSheet.create({
    tutorNameContainer: {
        backgroundColor:"#F4F5F5",
        width: 360,
        height: 60,
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection: "row",
        padding: 30
    }
});

TutorName.defaultprops = {
    text:"Default",
}

TutorName.propTypes = {
    text:propTypes.string,
}

export default TutorName;