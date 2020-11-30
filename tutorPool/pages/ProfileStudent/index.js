import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import NavBar from '../../comps/NavBar';
import TopNav from '../../comps/TopNav';
import HomepageText from '../../comps/Homepage';


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
                <View>
                    <Text>Email</Text>
                    <View style={styles.inputBox}><Text>exampleEmail@gmail.com</Text></View>
                    <Text>Password</Text>
                    <View style={styles.inputBox}><Text>**********</Text></View>
                </View>
            </View>

        </View>
        <View style={styles.navbarBox}>
            <NavBar homeimg={home} messageimg={message} bellimg={bell} userimg={useractive} onPress1={()=>history.push('/studenthomepage')} onPress2={()=>history.push('/studentmessages')} onPress3={()=>history.push('/Notifications')} onPress4={()=>history.push('/profilestudent')}></NavBar>
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

    maincontBox: {
        position:'absolute',
        top:'10%',
    },


    userinfo: {
        display:'flex',
        alignItems:'center'
    }, 

    title: {
        position:'relative',
        left:'-30%'
    },

    UserPic: {
        position:'relative',
        marginTop:'7%',
        marginBottom:'7%',
    },

    studentname: {
        margin:'2%',
        fontWeight:'bold',
        fontSize:22,
    },

    usertype: {
        fontSize:18
    },

    infoCont:{
        display:'flex',
        flexDirection:'column',
        marginTop:'5%'
    },


    textStyle: {
        fontWeight:'bold',
        fontSize:18,
        marginBottom:'5%',

    },

    navbarBox: {
        position:'absolute',
        bottom:0,
    },

    inputBox: {
        width:300,
        height:50,
        borderRadius:10,
        backgroundColor:'#F4F5F5',
        display:'flex',
        justifyContent:'center',
        paddingLeft:'5%',
        marginBottom:'8%',
        marginTop:'3%'
    }

  

});

export default ProfileStudent;
