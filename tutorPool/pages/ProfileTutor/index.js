import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import NavBar from '../../comps/NavBar';
import TopNav from '../../comps/TopNav';
import UserCard from '../../comps/UserCard';
import AboutInput from '../../comps/AboutInput';
import Rates from '../../comps/Rates';
import AvailableinText from '../../comps/AvailableinText';
import SmallBubbleButton from '../../comps/SmallBubbleButton';



const ProfileTutor = ({history}) => {
    return <View style={styles.viewCont}>
        <TopNav onPress1={()=>history.push('/pulloutmenu')}/>
        <View style={styles.navbarBox}>
        <Text>Profile</Text>
        <UserCard style={styles.User} />
        <AboutInput name="About Me"/>
        <Rates />
        <View style={styles.Avail}>
        <AvailableinText text="Available in"/>
        <SmallBubbleButton text="Video Calls"/>
        <SmallBubbleButton text="In-Person"/>
        </View>
        <NavBar />
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
       
    },

    User: {
        margin:50,
    },

    Avail: {
        width: 300,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    }

});

export default ProfileTutor;
