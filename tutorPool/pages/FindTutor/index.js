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




const FindTutor = ({}) => {
    return <View style={styles.viewCont}>
        <TopNav />
        <View style={styles.Top}>
         <Text style={styles.Find}>Find A Tutor</Text>
            <View style={styles.subjects}>
                <BlueSubjectText text="English"/>
                <BlueSubjectText text="Art"/>
             </View>
        </View>
        <View style={styles.navbarBox}>
        <View style={styles.User}>
        <FindTutorBox text1="Becca Williams" text2="English, Art" text3="4.5"/>
        </View>
        </View>

        <View style={styles.navbarBox}>
        <View style={styles.User}>
        <FindTutorBox text1="Anna Smith" text2="English, Art, History" text3="5.0"/>
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

    User: {

    marginTop:20,
    },

    navbarBox: {
       
        marginTop:10,
        marginLeft:20,
    },


    NavBar: {
        marginTop:20,
        bottom:-250,
    },

    Top :{
        display:"flex",
        marginTop:30,
        marginRight:200,

    },

    Find: {
        fontWeight:"600",
        fontSize:18,
    },

    subjects: {
        flexDirection:"row",
    }

});

export default FindTutor;
