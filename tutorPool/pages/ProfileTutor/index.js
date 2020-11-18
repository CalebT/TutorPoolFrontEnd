import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import NavBar from '../../comps/NavBar';
import TopNav from '../../comps/TopNav';
import UserCard from '../../comps/UserCard';
import AboutInput from '../../comps/AboutInput';
import Rates from '../../comps/Rates';
import AvailableinText from '../../comps/AvailableinText';
import SmallBubbleButton from '../../comps/SmallBubbleButton';
import TutorNameEdit from '../../comps/TutorNameEdit';
import BlueButton from '../../comps/BlueButton';



const ProfileTutor = ({}) => {
    return <View style={styles.viewCont}>
        <TopNav />
        <Text style={styles.Profile}>Profile</Text>
        <View style={styles.Box}>
        <TutorNameEdit style={styles.Tutor} tutorname="Becca Williams" tutorsubject1="English," tutorsubject2="Art"/>
        <AboutInput name="About Me"/>
        <Rates />
        <View style={styles.Avail}>
        <View style={styles.AvailText}><AvailableinText text="Available in"/></View>
        <SmallBubbleButton text="Video Calls"/>
        <SmallBubbleButton text="In-Person"/>
        </View>
        <View style={styles.UpdateButton}><BlueButton text="Update"/></View>
        </View>
        <View style={styles.NavBar}><NavBar /></View>
    </View>
}

const styles=StyleSheet.create({

    viewCont: {
        display:"flex",
        
        backgroundColor:'white',
        marginTop:40,
        margin:30,

    },

    Profile: {
        fontSize:25,
        fontWeight: "500",
        marginTop:43,
    },

    Tutor: {
        marginTop: 30,
    },

    Box: {
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around",
        marginTop: 30,
        backgroundColor:"#FFF",
        borderColor:"#000",
        borderWidth:1,

       
    },

    Avail: {
        width: 300,
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "center",
        justifyContent:"space-evenly",
        margin: 30,
    },

    AvailText: {
        marginBottom:15,
        marginRight: 30,
        
    },

    UpdateButton: {
        marginBottom:10

    },

    NavBar: {
        
    },


});

export default ProfileTutor;
