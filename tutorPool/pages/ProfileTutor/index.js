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




const ProfileTutor = ({history}) => {
    return <View style={styles.viewCont}>
        <View style={styles.topNavBox}>
            <TopNav onPress1={()=>history.push('/pulloutmenu')}/>
        </View>
        <View style={styles.navbarBox}>
        <HomepageText text="Profile" />
        <View style={styles.User}>
        <EditProfile text1="Becca Williams" text2="English, Art"/>
        </View>
        </View>
        <AboutInput name="About Me" />
        <View style={styles.Rates}><Rates text1="Free" text2="$20" text3="$30"/></View>
        <View style={styles.Avail}>
        <View style={styles.AvailText}><AvailableinText text="Available in"/></View>
        <SmallBubbleButton text="Video Calls"/>
        <SmallBubbleButton text="In-Person"/>
        </View>
        <BlueButton text="Update"/>
        <View style={styles.navbarBox}>
            <NavBar homeimg={homeactive} messageimg={message} bellimg={bell} userimg={user} onPress1={()=>history.push('/studenthomepage')} onPress2={()=>history.push('/studentmessages')} onPress3={()=>history.push('/Notifications')} onPress4={()=>history.push('/profiletutor')}></NavBar>
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
    
    User: {

    marginTop:20,
    marginRight:130,
    },

    topNavBox: {
        position:'absolute',
        marginBottom:75 ,
        top:10
    },

    navbarBox: {
        position:'absolute',
        bottom:0,
    },

    Avail: {
        width: 300,
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "center",
        justifyContent:"space-evenly",
        margin: 30,
    },

    Rates: {
        marginTop:10,
    }

  

});

export default ProfileTutor;
