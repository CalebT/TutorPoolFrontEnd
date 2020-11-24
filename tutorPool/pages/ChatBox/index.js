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
import SendChatInput from '../../comps/SendChatInput';
import ChatContainerR from '../../comps/ChatContainer';
import { GiftedChat } from 'react-native-gifted-chat';
import { G } from 'react-native-svg';

const home = require('../../images/home.png');
const homeactive = require('../../images/home-active.png');
const message = require('../../images/message-circle.png');
const messageactive = require('../../images/message-circle-active.png');
const bell = require('../../images/bell.png');
const bellactive = require('../../images/bell-active.png');
const user = require('../../images/user.png');
const useractive = require('../../images/user-active.png');
const icon = require('../../images/icon.png');




const ChatBox = ({history}) => {
    return <View style={styles.viewCont}>
        <View style={styles.topNavBox}>
            <TopNav onPress1={()=>history.push('/pulloutmenu')}/>
        </View>
        <View style={styles.maincontBox}>
            <GiftedChat/>
        </View>
        <View style={styles.navbarBox}>
            <NavBar homeimg={home} messageimg={messageactive} bellimg={bell} userimg={user} onPress1={()=>history.push('/studenthomepage')} onPress2={()=>history.push('/studentmessages')} onPress3={()=>history.push('/Notifications')} onPress4={()=>history.push('/profilestudent')}/>
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

    navbarBox: {
        position:'absolute',
        bottom:0,
    }
});

export default ChatBox;