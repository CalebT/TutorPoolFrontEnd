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
import EditProfile from '../../comps/EditProfile';

const home = require('../../images/home.png');
const homeactive = require('../../images/home-active.png');
const message = require('../../images/message-circle.png');
const messageactive = require('../../images/message-circle-active.png');
const bell = require('../../images/bell.png');
const bellactive = require('../../images/bell-active.png');
const user = require('../../images/user.png');
const useractive = require('../../images/user-active.png');
const icon = require('../../images/icon.png');




const ProfileTutorMyRates = ({}) => {
    return <View style={styles.viewCont}>
        <TopNav />
        <View style={styles.navbarBox}>
        <HomepageText text="Profile" />
        <View style={styles.User}>
        <EditProfile />
        </View>
        <AboutInput name="About Me"/>
        <View style={styles.MyRates}>
        <MyRatesInput name="My Rates"/>
        </View>
        <View style={styles.Avail}>
        <AvailableinText text="Available in"/>
        <SmallBubbleButton text="Video Calls"/>
        <SmallBubbleButton text="In-Person"/>
        </View>
        <View style={styles.UpdateButton}>
            <BlueButton text="Update"/>
        </View>
        </View>
        <View style={styles.NavBar}>
        <NavBar homeimg={home} messageimg={message} bellimg={bell} userimg={user}/>
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

    navbarBox: {
       
        marginTop:10,
        marginLeft:20,
    },

    User: {
        marginLeft:30,
        marginTop:10,
    },

    Avail: {
        display:"flex",
        flexDirection:"row",
        alignContent:"center",
        justifyContent:"space-between",
        marginTop:30,
        width:290,

    },

    MyRates: {
        marginTop:20,
    },

    UpdateButton: {
        marginTop:20,
    },

    NavBar: {
        marginTop:20,
    }

});

export default ProfileTutorMyRates;
