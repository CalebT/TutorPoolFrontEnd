import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import NavBar from '../../comps/NavBar';
import TopNav from '../../comps/TopNav';
import UserCard from '../../comps/UserCard';
import AboutInput from '../../comps/AboutInput';
import Rates from '../../comps/Rates';
import AvailableinText from '../../comps/AvailableinText';
import SmallBubbleButton from '../../comps/SmallBubbleButton';
import BlueButton from '../../comps/BlueButton';
import HomepageText from '../../comps/Homepage';
import MyRatesInput from '../../comps/MyRatesInput';
import NewMsgBox from '../../comps/NewMsgBox';
import BackArrow from '../../comps/BackArrow';
import About from '../../comps/About';
import Review from '../../comps/Review';

const home = require('../../images/home.png');
const homeactive = require('../../images/home-active.png');
const message = require('../../images/message-circle.png');
const messageactive = require('../../images/message-circle-active.png');
const bell = require('../../images/bell.png');
const bellactive = require('../../images/bell-active.png');
const user = require('../../images/user.png');
const useractive = require('../../images/user-active.png');
const icon = require('../../images/icon.png');




const SelectTutorPage = ({}) => {
    return <View style={styles.viewCont}>
        <TopNav />
        <View style={styles.back}> 
        <BackArrow text="Find A Tutor" />
        </View>

        <View style={styles.Box}>
            <View style={styles.TutorInfo}>
                <View style={styles.tutor}>
                <UserCard text1="Becca Williams" text2="English Art" />
                </View>
            <About text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <Rates text1="Free" text2="$20" text3="$30"/>
            </View>

        <View style={styles.Avail}>
            <View style={styles.AvailText}>
                <AvailableinText text="Available in"/>
            </View>
             <SmallBubbleButton text="Video Calls"/>
            <SmallBubbleButton text="In-Person"/>
        </View>

        <BlueButton text="Request Tutoring"/>
        </View>

        <View style={styles.NavBar}>
            <NavBar homeimg={home} messageimg={message} bellimg={bell} userimg={user}/>
        </View>
        <View style={styles.Review}>
            <Review text1="Writing essays has never been easy for our daughter, but you have managed to help her out. She is more confident when it comes [...]" text2="Bob Smith" text3="5.0"/>
        </View>
    </View>
}

const styles=StyleSheet.create({
    viewCont: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'white',
        marginTop:40,

    },

    back: {
        marginRight:230,
        marginTop:10,
    },

    Box: {
       
        marginTop:20,
        paddingBottom:15,
        backgroundColor:"#FFF",
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
             height: 3,
            width: 3
         },
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,

    },

    tutor:{
        marginLeft:55,

    },

    TutorInfo: {
        alignItems:"center",
        justifyContent:"center",
   
    },


    NavBar: {
        marginTop:20,
        bottom:-200,
    },

    Avail: {
        width: 300,
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "center",
        justifyContent:"space-evenly",
        margin: 20,
    },

    Rates: {
        marginTop:10,
    },

    Review: {
        position:"absolute",
        bottom:-80,
    },



});

export default SelectTutorPage;
