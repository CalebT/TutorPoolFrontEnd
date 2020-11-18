import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import BlueButton from '../../comps/BlueButton';
import SubjectSquare from '../../comps/SubjectSquare';
import SubjectRectangle from '../../comps/SubjectRectangle';
import HomepageText from '../../comps/Homepage';
import FindaTutorText from '../../comps/FindaTutorText';
import NavBar from '../../comps/NavBar';
import TopNav from '../../comps/TopNav';

const StudentHomepage = ({history}) => {
    return <View style={styles.viewCont}>
        <View style={styles.topNavBox}>
            <TopNav onPress1={()=>history.push('/pulloutmenu')}/>
        </View>
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
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        height:750
    },

    topNavBox: {
        marginBottom:75 
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
        bottom:-100,
    }
});

export default StudentHomepage;
