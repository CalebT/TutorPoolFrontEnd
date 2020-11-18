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
import About from '../../comps/About';
import SubjectBubbles from '../../comps/SubjectBubbles';
import OtherSubjectInput from '../../comps/OtherSubjectInput';

const home = require('../../images/home.png');
const homeactive = require('../../images/home-active.png');
const message = require('../../images/message-circle.png');
const messageactive = require('../../images/message-circle-active.png');
const bell = require('../../images/bell.png');
const bellactive = require('../../images/bell-active.png');
const user = require('../../images/user.png');
const useractive = require('../../images/user-active.png');
const icon = require('../../images/icon.png');




const ProfileTutorSubject = ({}) => {
    return <View style={styles.viewCont}>
        <TopNav />
        <View style={styles.navbarBox}>
            <HomepageText text="Profile" />
            <View style={styles.User}>
                <EditProfile text1="Becca Williams" text2="English, Art"/>
             </View>
        </View>
        <View style={styles.subjects}>
            <View style={styles.subjectsText}> 
            <SubjectBubbles text="English"/>
            </View>
            <View style={styles.subjectsText}> 
            <SubjectBubbles text="History"/>
            </View>
        </View>
        
        <View style={styles.subjects}>
            <View style={styles.subjectsText}> 
            <SubjectBubbles text="Geography"/>
            </View>
            <View style={styles.subjectsText}> 
            <SubjectBubbles text="Art"/>
            </View>
        </View>

        <View style={styles.subjects}>
            <View style={styles.subjectsText}> 
            <SubjectBubbles text="Math"/>
            </View>
            <View style={styles.subjectsText}> 
            <SubjectBubbles text="Electives"/>
            </View>
        </View>

        <View style={styles.subjects}>
            <View style={styles.subjectsText}> 
            <SubjectBubbles text="Science"/>
            </View>
            <View style={styles.subjectsText}> 
            <SubjectBubbles text="Other"/>
            </View>
        </View>

        <OtherSubjectInput name="Other"/>

        <About text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <View style={styles.Rates}><Rates text1="Free" text2="$20" text3="$30"/></View>
        <View style={styles.Avail}>
        <View style={styles.AvailText}><AvailableinText text="Available in"/></View>
        <SmallBubbleButton text="Video Calls"/>
        <SmallBubbleButton text="In-Person"/>
        </View>
        <BlueButton text="Update"/>
        <View style={styles.NavBar}>
        <NavBar homeimg={home} messageimg={message} bellimg={bell} userimg={user}/>
        </View>
    </View>
}

const styles=StyleSheet.create({
    subjects: {
        width:300,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly", 
        
       
    },

    subjectsText: {
        margin:2,

    },

    viewCont: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'white',
        marginTop:40,

    },

    User: {

    marginTop:20,
    marginRight:130,
    },

    navbarBox: {
       
        marginTop:30,
       
    },

    NavBar: {
        marginTop:20,
        bottom:-30,
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

export default ProfileTutorSubject;
