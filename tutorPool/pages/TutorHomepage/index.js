import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Alert} from 'react-native';
import NavBar from '../../comps/NavBar';
import TopNav from '../../comps/TopNav';
import UserCard from '../../comps/UserCard';
import AboutInput from '../../comps/AboutInput';
import Rates from '../../comps/Rates';
import AvailableinText from '../../comps/AvailableinText';
import SmallBubbleFull from '../../comps/SmallBubbleFull';
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
const star = require('../../images/star.png')



const SelectTutorPage = ({history}) => {

    const showAlert = () => {
        Alert.alert(
            'Request for tutoring has been successfully submitted.'
        )
    }

    return <View style={styles.viewCont}>
        <View style={styles.topNavBox}>
            <TopNav onPress1={()=>history.push('/pulloutmenu')}/>
        </View>
        
        <View style={styles.mainCont}>
            <View style={styles.back} > 
                <HomepageText text={"Homepage"}></HomepageText>
            </View>
                <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.wrap}>
                    <View style={styles.profileBox}>
                        <View style={styles.mainProf}>
                            <Image source={Becca} style={styles.pic}/>
                            <View>
                                <Text style={styles.textStyle1}>Becca Williams</Text>
                                <Text style={styles.textStyle2}>English, Art</Text>
                                <View style={styles.rating}>
                                    <Image source={star}></Image>
                                    <Text style={styles.ratingColor}>5.0</Text>
                                </View>
                            </View>
                        </View>
                        <About text="Hi! My name is Becca Williams and I am a tutor. I have always tutored when I was at school and specialize in English and Arts. Let’s learn together!"/>
                        <Rates text1="Free" text2="$20" text3="$30"/>
                        <View style={styles.Avail}>
                            <View style={styles.availCont}>
                                <AvailableinText text="Available in"/>
                            </View>
                            <View style={styles.availCont}>
                                <SmallBubbleFull text="Video Calls"/>
                            </View>
                            <View style={styles.availCont}>
                                <SmallBubbleFull text="In-Person"/>
                            </View>
                        </View>
                        <View style={styles.buttonBox}>
                            <BlueButton text="Request Tutoring" onPress={showAlert}/>
                        </View>
                    </View>

                    <Text style={styles.reviewTitle}>Reviews</Text>
                    <View style={styles.Review}>
                        <Review text1="Writing essays has never been easy for our daughter, but you have managed to help her out. She is more confident when it comes [...]" text2="Bob Smith" text3="5.0"/>
                    </View>
                </ScrollView>
        </View>
        <View style={styles.navbarBox}>
            <NavBar homeimg={homeactive} messageimg={message} bellimg={bell} userimg={user} onPress1={()=>history.push('/Tutorhomepage')} onPress2={()=>history.push('/tutorRates')} onPress3={()=>history.push('/Notifications')} onPress4={()=>history.push('/profilestudent')}/>
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
        marginBottom:'10%' ,
        top:'2%'
    },

    mainCont: {
        position:'absolute',
        top:'-38%',
        width:'90%',
        height:'130%',
    },

    back: {
        marginTop:"100%",
        marginRight:'40%'
    },

    buttonBox: {
        marginBottom:20
    },

    profileBox: {
        backgroundColor:"#FAFAFA",
        width:'90%',
        height:'auto',
        display:'flex',
        alignItems:'center',
        borderRadius:10,
        elevation:10,
        marginTop:10
    },

    mainProf: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:15
    },

    pic: {
        marginRight:15,
    },

    textStyle1: {
        fontSize: 22,
        fontWeight: 'bold',
    },

    textStyle2: {
        fontSize: 18,
        fontWeight:'bold',
    },

    rating: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },

    ratingColor: {
        marginLeft:'5%',
        color:'#595CFF',
        fontSize:16
    },

    scrollStyle:{
        width:'100%',
        height:'auto',
    },

    wrap: {
        display:'flex',
        alignItems:'center',
    },

    Avail: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },

    availCont: {
        margin:10
    },

    reviewTitle:{
        fontSize:26,
        fontWeight:'bold',
        position:'relative',
        marginTop:15,
        left:'-28%',
    },

    navbarBox: {
        position:'absolute',
        bottom:0,  
    },

});

export default SelectTutorPage;
