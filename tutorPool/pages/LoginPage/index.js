import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import propTypes from 'prop-types';
import LoginInput from '../../comps/LoginInput';
import PasswordInput from '../../comps/PasswordInput';
import BlueButton from '../../comps/BlueButton';

const LoginPage = ({}) => {
    return <View style={styles.viewCont}>
        <Image style={styles.logo} source={require('../../images/Logo.png')} />
        <LoginInput style={styles.inputs} name="Email"></LoginInput>
        <PasswordInput style={styles.inputs} name="Password"></PasswordInput>
        <BlueButton style={styles.buttonBox} text="SIGN IN"></BlueButton>
        <Text>New on Tutor Pool?</Text>
        <BlueButton style={styles.buttonBox} text="REGISTER NOW"></BlueButton>
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
        marginTop:100,
        marginBottom:50,
    },

    inputs: {
        marginBottom:100,
    }
});

export default LoginPage;
