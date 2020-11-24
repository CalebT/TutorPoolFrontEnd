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

const Becca = require('../../images/becca.png');



const TutorHomepage = ({history}) => {
    return <View style={styles.viewCont}>
        <View style={styles.topNavBox}>
            <TopNav onPress1={()=>history.push('/pulloutmenu')}/>
        </View>


        <ScrollView style={styles.scrollView}>
            <View style={styles.title}>
                <HomepageText text="Homepage" />
            </View>
       
            <View style={styles.Box}>
                <View style={styles.TutorInfo}>
                    <View style={styles.tutor}>
                    <UserCard text1="Becca Williams" text2="English Art" profilePic={Becca}/>
                    </View>
                <About text="Hi! My name is Becca Williams and I am a tutor. I have always tutored when I was at school and specia-lize in English and Arts. Let’s learn together!"/>
                <Rates text1="Free" text2="$20" text3="$30"/>
                </View>

            <View style={styles.Avail}>
                <SmallBubbleButton text="Video Calls"/>
                <SmallBubbleButton text="In-Person"/>
            </View>
            </View>

            <View style={styles.Review}>
                <Review text1="Writing essays has never been easy for our daughter, but you have managed to help her out. She is more confident when it comes [...]" text2="Bob Smith" text3="5.0"/>
            </View>

            <View style={styles.buttonBox}>
                <BlueButton text="Request Tutoring"/>
            </View>
        </ScrollView>
        

        <View style={styles.navbarBox}>
            <NavBar homeimg={homeactive} messageimg={message} bellimg={bell} userimg={user} onPress1={()=>history.push('/tutorhomepage')} onPress2={()=>history.push('/tutormessages')} onPress3={()=>history.push('/Notifications')} onPress4={()=>history.push('/profiletutor')}></NavBar>
        </View>
    
    </View>
}

const styles=StyleSheet.create({
    viewCont: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        height:750
    },

    topNavBox: {
        position:'absolute',
        marginBottom:75 ,
        top:10
    },

    title: {
        left:25
    },

    maincontBox: {
        position:'absolute',
        top:'10%',
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
        display:'flex',
    },

    TutorInfo: {
        alignItems:"center",
        justifyContent:"center",
   
    },

    scrollView: {
        height:'81%',
        width:'95%',
        position:'absolute',
        top:'10%',
    }, 

    navbarBox: {
        position:'absolute',
        bottom:10,
    },

    Avail: {
        width: 300,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        margin: 20,
    },

    Rates: {
        marginTop:10,
    },

    Review: {
        marginTop:-10,
        marginBottom:10,
        display:'flex',
        alignItems:'center',
    },

    buttonBox: {
        display:'flex',
        alignItems:'center'
    }


});

export default TutorHomepage;
