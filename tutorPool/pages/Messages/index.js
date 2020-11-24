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

const Messages = ({history}) => {
    return <View style={styles.viewCont}>
        <View style={styles.topNavBox}>
            <TopNav onPress1={()=>history.push('/pulloutmenu')}/>
        </View>
        <View style={styles.maincontBox}>
            <HomepageText text="Messages" />
            <View style={styles.User}>
                <NewMsgBox text1="Becca Williams" text2="Got it! thank you! See you..." text3="3 hours ago" profilePic={Becca} onPress={()=>history.push('/chatbox')}/>
            </View>
        </View>
        <View style={styles.navbarBox}>
            <NavBar homeimg={home} messageimg={messageactive} bellimg={bell} userimg={user} onPress1={()=>history.push('/studenthomepage')} onPress2={()=>history.push('/studentmessages')} onPress3={()=>history.push('/Notifications')} onPress4={()=>history.push('/profilestudent')}></NavBar>
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

    maincontBox: {
        position:'absolute',
        top:'10%',
    },

    User: {
        marginTop:15
    },

    topNavBox: {
        position:'absolute',
        marginBottom:75 ,
        top:10
    },

    navbarBox: {
        position:'absolute',
        bottom:0,
    }
});

export default Messages;
