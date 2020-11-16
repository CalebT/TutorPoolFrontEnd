import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import BlueButton from '../../comps/BlueButton';
import SubjectSquare from '../../comps/SubjectSquare';
import SubjectRectangle from '../../comps/SubjectRectangle';
import HomepageText from '../../comps/Homepage';
import FindaTutorText from '../../comps/FindaTutorText';
import NavBar from '../../comps/NavBar';
import TopNav from '../../comps/TopNav';
import BackSignIn from '../../comps/BackSignIn';

const FindTutor = ({}) => {
    return <View style={styles.viewCont}>
        <TopNav />
        <View style={styles.navbarBox}>
        <BackSignIn text="Find A Tutor"/>
        <View style={styles.ProfileBox}>

        </View>
            <NavBar />
        </View>
    </View>
}

const styles=StyleSheet.create({
    viewCont: {
        display:"flex",
        backgroundColor:'white',
        marginTop:40,

    },

    navbarBox: {
       
    },

    ProfileBox: {
        backgroundColor:'white',
        width:300,
        height: 500,
        borderColor: "#000",
        borderWidth: 1,
        margin: 10,
    },
});

export default FindTutor;
