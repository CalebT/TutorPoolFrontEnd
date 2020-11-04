import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import propTypes from 'prop-types';
import LoginInput from '../../comps/LoginInput';
import PasswordInput from '../../comps/PasswordInput';
import BlueButton from '../../comps/BlueButton';
import SubjectSquare from '../../comps/SubjectSquare';

const RegisterPage = ({}) => {
    return <View style={styles.viewCont}>
        <Image style={styles.logo} source={require('../../images/LogoSmall.png')} />
        <LoginInput style={styles.inputs} name="Email"></LoginInput>
        <PasswordInput style={styles.inputs} name="Password"></PasswordInput>
        <PasswordInput style={styles.inputs} name="Confirm Password"></PasswordInput>
        <Text>I am a</Text>
        <View style={styles.selectionBox}>
            <SubjectSquare text="Student"/>
            <SubjectSquare text="Tutor"/>
        </View>
        <BlueButton style={styles.buttonBox} text="REGISTER"></BlueButton>
        <Text>Back to Sign In</Text>
    </View>
}

const styles=StyleSheet.create({
    viewCont: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },

    logo: {
        right:75,
        marginTop:100,
        marginBottom:50,
    },

    selectionBox: {
        display:'flex',
        flexDirection:'row',
        alignContent:'space-between',
        margin:10
    }
});

export default RegisterPage;
