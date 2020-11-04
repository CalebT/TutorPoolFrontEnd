import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import HomepageText from '../../comps/Homepage';
import FindaTutorText from '../../comps/FindaTutorText';
import NavBar from '../../comps/NavBar';
import UserCard from '../../comps/UserCard';

const MessageStudent = ({}) => {
    return <View style={styles.viewCont}>
        <Image style={styles.logo} source={require('../../images/LogoSmaller.png')} />
        <HomepageText text="Messages"></HomepageText>
        <FindaTutorText text="Recent" text2=""></FindaTutorText>
        <View style={styles.userBox}>
            <UserCard></UserCard>
            <NavBar></NavBar>
        </View>
    </View>
}

const styles=StyleSheet.create({
    viewCont: {
        display:'flex',
        alignItems:'center',
        backgroundColor:'white',
        marginTop:40.
    },

    logo: {
        left:75,
        marginBottom:50,
    },

    userBox: {
        display:'flex',
        marginTop:30
    },

    buttonBox: {
        marginTop: 20,
    },

    navbarBox: {
        position:'absolute',
        bottom:-100,
    }
});

export default MessageStudent;
