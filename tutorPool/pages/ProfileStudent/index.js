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

const userimg = require('../../images/pattern.png');


const ProfileStudent = ({history}) => {
    return <View style={styles.viewCont}>
        <View style={styles.topNavBox}>
            <TopNav onPress1={()=>history.push('/pulloutmenu')}/>
        </View>
        <View style={styles.maincontBox}>
            <View style={styles.userinfo}>
                <View style={styles.title}>
                    <HomepageText text="Profile" />
                </View>
                <View style={styles.UserPic}>
                    <Image source={userimg}/>
                </View>
                <Text style={styles.studentname}>Student Name</Text>
                <Text style={styles.usertype}>Student</Text>
            </View>
            

            <View style={styles.infoCont}>
                <Text style={styles.textStyle}>Personal Information</Text>
            </View>

        </View>
        <View style={styles.navbarBox}>
            <NavBar homeimg={homeactive} messageimg={message} bellimg={bell} userimg={user} onPress1={()=>history.push('/studenthomepage')} onPress2={()=>history.push('/studentmessages')} onPress3={()=>history.push('/Notifications')} onPress4={()=>history.push('/profilestudent')}></NavBar>
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
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        top:-10
    },

    userinfo: {
        display:'flex'
    }, 

    title: {
        position:'relative',
        left:'-30%'
    },

    UserPic: {
        position:'relative',
        marginTop:15
    },

    studentname: {
        margin:15,
        fontWeight:'bold',
        fontSize:22,
    },

    usertype: {
        fontSize:18
    },

    infoCont:{
        display:'flex',
        flexDirection:'column',
    },


    textStyle: {
        fontWeight:'bold',
        fontSize:18,


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

export default ProfileStudent;
