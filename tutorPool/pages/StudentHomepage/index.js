import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import BlueButton from '../../comps/BlueButton';
import SubjectSquare from '../../comps/SubjectSquare';
import SubjectRectangle from '../../comps/SubjectRectangle';
import HomepageText from '../../comps/Homepage';
import FindaTutorText from '../../comps/FindaTutorText';
import NavBar from '../../comps/NavBar';
import TopNav from '../../comps/TopNav';


const home = require('../../images/home.png');
const homeactive = require('../../images/home-active.png');
const message = require('../../images/message-circle.png');
const messageactive = require('../../images/message-circle-active.png');
const bell = require('../../images/bell.png');
const bellactive = require('../../images/bell-active.png');
const user = require('../../images/user.png');
const useractive = require('../../images/user-active.png');

const StudentHomepage = ({history}) => {
    return <View style={styles.viewCont}>
        <View style={styles.topNavBox}>
            <TopNav onPress1={()=>history.push('/pulloutmenu')}/>
        </View>
        <View style={styles.maincontBox}>
            <HomepageText text="Homepage"></HomepageText>
            <View style={styles.textBox}>
            <FindaTutorText text="Find a Tutor" text2="Choose up to three subjects for which you need help."></FindaTutorText>
            </View>
            <View style={styles.selectionBox}>
                <SubjectSquare text="English"/>
                <SubjectSquare text="Geography"/>
                <SubjectSquare text="History"/>
            </View>
            <View style={styles.selectionBox}>
                <SubjectSquare text="Math"/>
                <SubjectSquare text="Geography"/>
                <SubjectSquare text="History"/>
            </View>
            <View style={styles.selectionBox}>
                <SubjectRectangle text="English"/>
                <SubjectSquare text="History"/>
            </View>
            <View style={styles.buttonBox}>
                <BlueButton text="FIND A TUTOR" onPress={() => history.push('/findtutor')}></BlueButton>
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

    topNavBox: {
        position:'absolute',
        marginBottom:75 ,
        top:10
    },

    textBox: {
        width:300
    },

    selectionBox: {
        display:'flex',
        flexDirection:'row',
        alignContent:'space-between',
        margin:10
    },

    buttonBox: {
        marginTop: 20,
    },

    navbarBox: {
        position:'absolute',
        bottom:0,
    }
});

export default StudentHomepage;
