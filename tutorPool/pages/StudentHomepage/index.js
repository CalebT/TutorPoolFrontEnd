import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import BlueButton from '../../comps/BlueButton';
import SubjectSquare from '../../comps/SubjectSquare';
import SubjectRectangle from '../../comps/SubjectRectangle';
import HomepageText from '../../comps/Homepage';
import FindaTutorText from '../../comps/FindaTutorText';
import NavBar from '../../comps/NavBar';

const StudentHomepage = ({}) => {
    return <View style={styles.viewCont}>
        <Image style={styles.logo} source={require('../../images/LogoSmaller.png')} />
        <HomepageText text="Homepage"></HomepageText>
        <FindaTutorText text="Find a Tutor" text2="Choose up to three subjects for which you need help."></FindaTutorText>
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
            <BlueButton text="FIND A TUTOR"></BlueButton>
        </View>
        <View style={styles.navbarBox}>
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
        bottom:-100,
    }
});

export default StudentHomepage;
