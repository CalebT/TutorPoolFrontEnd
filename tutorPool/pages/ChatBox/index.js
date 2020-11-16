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
import BackStudent from '../../comps/BackStudent';
import SendChatInput from '../../comps/SendChatInput';
import ChatContainerR from '../../comps/ChatContainer';

const home = require('../../images/home.png');
const homeactive = require('../../images/home-active.png');
const message = require('../../images/message-circle.png');
const messageactive = require('../../images/message-circle-active.png');
const bell = require('../../images/bell.png');
const bellactive = require('../../images/bell-active.png');
const user = require('../../images/user.png');
const useractive = require('../../images/user-active.png');
const icon = require('../../images/icon.png');




const ChatBox = ({}) => {
    return <View style={styles.viewCont}>
        <TopNav />
        <View style={styles.navbarBox}>
        <BackStudent text="Jen Student" />
        <View style={styles.sender}>
                    <ChatContainerR text="hello" />

            </View>
        <View style={styles.Chat}>
            
    
        <SendChatInput />
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
    },



    NavBar: {
        marginTop:20,
        bottom:-400,
        },

        Chat: {
           bottom:-400,
            },

    
    sender:{
    marginLeft:130,
    marginTop:30,
    }

});

export default ChatBox;
