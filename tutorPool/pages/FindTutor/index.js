import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
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
import BackArrow from '../../comps/BackArrow';
import BlueSubjectText from '../../comps/BlueSubjectText';
import FindTutorBox from '../../comps/FindTutorBox';

const home = require('../../images/home.png');
const homeactive = require('../../images/home-active.png');
const message = require('../../images/message-circle.png');
const messageactive = require('../../images/message-circle-active.png');
const bell = require('../../images/bell.png');
const bellactive = require('../../images/bell-active.png');
const user = require('../../images/user.png');
const useractive = require('../../images/user-active.png');
const icon = require('../../images/icon.png');

const Becca = require('../../images/becca.png');
const Anna = require('../../images/Anna.png');
const Elizabeth = require('../../images/Elizabeth.png');
const Ryan = require('../../images/Ryan.png');


const FindTutor = ({history}) => {
    return <View style={styles.viewCont}>
        <View style={styles.topNavBox}>
            <TopNav onPress1={()=>history.push('/pulloutmenu')}/>
        </View>
        <View style={styles.maincontBox}>
            <Text style={styles.text}>Find a Tutor</Text>
            <View style={styles.subSelect}>
                <BlueSubjectText text="English"/>
                <BlueSubjectText text="Science"/>
            </View>
            <View style={styles.tutorBox}>
                <ScrollView style={styles.scrollStyle}>
                    <UserCard text1="Becca Williams" text2="English, Science, Art" profilePic={Becca}/>
                    <UserCard text1="Anna Smith" text2="English, Science, Geography" profilePic={Anna}/>
                    <UserCard text1="Elizabeth Taylor" text2="Science, Art, History" profilePic={Elizabeth}/>
                    <UserCard text1="Ryan Philips" text2="English, French" profilePic={Ryan}/>
                    <UserCard text1="Ronald Lopez" text2="Science, Math" profilePic={icon}/>
                </ScrollView>
            </View>
        </View>
        <View style={styles.navbarBox}>
            <NavBar homeimg={homeactive} messageimg={message} bellimg={bell} userimg={user} onPress1={()=>history.push('/studenthomepage')} onPress2={()=>history.push('/studentmessages')} onPress3={()=>history.push('/Notifications')} onPress4={()=>history.push('/profilestudent')}/>
        </View>
    </View>
}

const styles=StyleSheet.create({
    viewCont: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        height:'100%'
    },

    topNavBox: {
        position:'absolute',
        marginBottom:75 ,
        top:10
    },

    maincontBox: {
        width:'90%',
        height:'90%',
    },

    text: {
        fontSize:22,
        fontWeight:'bold',
        marginTop:30,
        marginLeft:30,
    },

    subSelect: {
        display:'flex',
        flexDirection:'row',
        marginLeft:8,
        marginTop:10
    },

    tutorBox:{
        display:'flex',
        alignItems:'center',
        width:'100%',
        marginLeft:'2.5%',
        height:'75%',
    },

    scrollStyle:{
        height:'71%',
        width:'100%',
    },

    navbarBox: {
        position:'absolute',
        bottom:0,  
    },

    subjects: {
        flexDirection:"row",
    }

});

export default FindTutor;
