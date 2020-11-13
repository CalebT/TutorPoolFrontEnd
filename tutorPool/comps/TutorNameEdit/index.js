import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

const TutorNameEdit = ({tutorname, tutorsubject1, tutorsubject2, tutorsubject3, rating, imgsrc}) => {
    return <View style={styles.tutorNameContainer}>
        <View>
            <Image style={styles.tutorImage} source={imgsrc}></Image>
            <View style={styles.camera}>
                <Image source={require('../../images/camera.png')}></Image>
            </View>
        </View>
        <View style={styles.tutorInfo}>
            <View>
                <Text style={styles.tutorNameText}>{tutorname}</Text>
                <Text style={styles.tutorSubjectText}>{tutorsubject1} {tutorsubject2} {tutorsubject3}</Text>
                <Image style={styles.pencil} source={require('../../images/pencil-create.png')}></Image>
            </View>
        </View>
    </View>
}

const styles=StyleSheet.create({
   pencil:{
       width: 16.5,
       height: 16.5
   },

   tutorNameContainer: {
        flexDirection: "row",
        alignItems: "center"
    },

    tutorInfo: {
        marginLeft: 20,
    },

    tutorNameText: {
        fontSize:16,
        fontWeight:"bold",

    },

    camera: {
        backgroundColor: "#3A86FF",
        alignItems:"center",
        justifyContent:"center",
        width:30,
        height:30,
        borderRadius:100,
        marginTop: 40,
        marginLeft: 40,
        position: "absolute",

    },

    tutorImage: {
        resizeMode:'contain',
        width: 60,
        height: 60,
    }
});

TutorNameEdit.defaultprops = {
    tutorname:"Becca Williams",
    tutorsubject1:"English",
    tutorsubject2:"",
    tutorsubject3:"",
    rating:"4.5",
    imgsrc: require('../../images/icon.png')
}

TutorNameEdit.propTypes = {
    tutorname:propTypes.string,
    tutorsubject:propTypes.string,
    rating:propTypes.string,
}

export default TutorNameEdit;