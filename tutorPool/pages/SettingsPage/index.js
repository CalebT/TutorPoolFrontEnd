import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import propTypes from 'prop-types';
import TopNav from '../../comps/TopNav';
import HomepageText from '../../comps/Homepage';
import EditProfile from '../../comps/EditProfile';
import LoginInput from '../../comps/LoginInput';
import SettingsToggle from '../../comps/SettingsToggle';

const SettingsPage = ({}) => {
    return <View style={styles.viewCont}>
            <TopNav></TopNav>
            <View style={styles.subjectTitle}>
                <HomepageText text="Profile"></HomepageText>
            </View>
            <View>
                <EditProfile />
            </View>
            <LoginInput name="Email"></LoginInput>
            <LoginInput name="Password"></LoginInput>
            <View styles={styles.toggles}>
                <View styles={styles.leftCont}>
                    <Text>HYE</Text>
                </View>
                <View styles={styles.rightCont}>
                    <SettingsToggle></SettingsToggle>
                </View>
            </View>
    </View>
}

const styles=StyleSheet.create({
    viewCont:{
        marginHorizontal: 38,
        marginVertical: 62,
    },

    subjectTitle:{
        marginTop: 34,
        marginBottom: 20
    },

    toggles:{
        display: "flex",
        flexDirection: "row",
        flexWrap:"wrap",

    },

    leftCont:{
        backgroundColor: "blue",
        width: 30,
        height: 30,
        flexGrow: 1,
    },

    rightCont:{
        backgroundColor: "red",
        flexGrow: 1,
    },
});

export default SettingsPage;
