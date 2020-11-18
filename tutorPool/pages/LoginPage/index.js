import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import propTypes from 'prop-types';
import LoginInput from '../../comps/LoginInput';
import PasswordInput from '../../comps/PasswordInput';
import BlueButton from '../../comps/BlueButton/';


const LoginPage = ({history}) => {
    
    return <View style={styles.viewCont}>
        <Image style={styles.logo} source={require('../../images/Logo.png')} />

        <View style={styles.inputs}>
            <LoginInput  name="Email"></LoginInput>
        </View>

        <View style={styles.inputs}>
            <PasswordInput name="Password"></PasswordInput>
        </View>
        

        <View style={styles.buttonBox}>
            <BlueButton text="SIGN IN" onPress={()=>history.push('/studenthomepage')}></BlueButton>
        </View>

        <View style={styles.textBox}>
            <Text style={styles.textStyle}>
                New on Tutor Pool?
            </Text>
        </View>

        <View style={styles.buttonBox}>
            <BlueButton text="REGISTER NOW" onPress={() => history.push('/register')}></BlueButton>
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

    logo: {
        marginTop:100,
        marginBottom:60,
    },

    inputs: {
        marginBottom:25,
    },

    buttonBox: {
        marginTop:20,
        marginBottom:20,
    },

    textBox: {
        marginTop:20,
        marginBottom:20,
    },

    textStyle: {
        fontWeight:'bold', 
        fontSize:18
    },
});

export default LoginPage;
