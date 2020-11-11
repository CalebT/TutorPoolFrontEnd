import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

const TutorName = ({tutorname, tutorsubject, rating, imgsrc}) => {
    return <View style={styles.tutorNameContainer}>
        <View>
            <Image source={imgsrc}></Image>
        </View>
        <View>
            <Text style={styles.tutorNameText}>{tutorname}</Text>
            <Text style={styles.tutorSubjectText}>{tutorsubject}</Text>
            <Text style={styles.tutorRateText}>{rating}</Text>
        </View>
    </View>
}

const styles=StyleSheet.create({
    tutorNameContainer: {
        
    },

    tutorNameText: {
        color: "black",
    },

    tutorSubjectText: {
        
    },

    tutorRateText: {
        
    },

});

TutorName.defaultprops = {
    tutorname:"Becca Williams",
    tutorsubject:"English",
    rating:"4.5",
    imgsrc: require('../../images/icon.png')
}

TutorName.propTypes = {
    tutorname:propTypes.string,
    tutorsubject:propTypes.string,
    rating:propTypes.string,
}

export default TutorName;