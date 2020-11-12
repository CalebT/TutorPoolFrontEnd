import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

const TutorName = ({tutorname, tutorsubject1, tutorsubject2, tutorsubject3, rating, imgsrc}) => {
    return <View style={styles.tutorNameContainer}>
        <View>
            <Image source={imgsrc}></Image>
        </View>
        <View style={styles.tutorInfo}>
            <View>
                <Text style={styles.tutorNameText}>{tutorname}</Text>
                <Text style={styles.tutorSubjectText}>{tutorsubject1} {tutorsubject2} {tutorsubject3}</Text>
            </View>
            <View style={styles.tutorRating}>
                <Image style={styles.star} source={require('../../images/star.png')}></Image>
                <Text style={styles.tutorRateText}>{rating}</Text>
            </View>
        </View>
    </View>
}

const styles=StyleSheet.create({
    tutorNameContainer: {
        flexDirection: "row",
        alignItems: "center"
    },

    tutorInfo: {
        marginLeft: 20,
    },

    tutorRating: {
        flexDirection: "row",
        alignItems: "center"
    },

    star: {
        width: 12,
        height: 12,
        marginRight: 5
    },

    tutorNameText: {
        fontSize:16,
        fontWeight:"bold",

    },

    tutorSubjectText: {
        
    },

    tutorRateText: {
        
    },

});

TutorName.defaultprops = {
    tutorname:"Becca Williams",
    tutorsubject1:"English",
    tutorsubject2:"",
    tutorsubject3:"",
    rating:"4.5",
    imgsrc: require('../../images/icon.png')
}

TutorName.propTypes = {
    tutorname:propTypes.string,
    tutorsubject:propTypes.string,
    rating:propTypes.string,
}

export default TutorName;