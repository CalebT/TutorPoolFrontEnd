import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import propTypes from 'prop-types';
import LoginInput from '../../comps/LoginInput';
import PasswordInput from '../../comps/PasswordInput';
import BlueButton from '../../comps/BlueButton';
import SubjectSquare from '../../comps/SubjectSquare';

const RegisterPage = ({history}) => {
    return <View style={styles.viewCont}>
        <Image style={styles.logo} source={require('../../images/LogoSmall.png')} />
        
        <View style={styles.inputs}>
            <LoginInput name="Email"></LoginInput>
        </View>
        
        <View style={styles.inputs}>
            <PasswordInput name="Password"></PasswordInput>
        </View>
        
        <View style={styles.inputs}>
            <PasswordInput name="Confirm Password"></PasswordInput>
        </View>

        <View style={styles.textBox}>
            <Text style={styles.textStyle}>I am a</Text>
        </View>
        
        <View style={styles.selectionBox}>
            <SubjectSquare text="Student"/>
            <SubjectSquare text="Tutor"/>
        </View>

        <View style={styles.buttonBox}>
            <BlueButton style={styles.buttonBox} text="REGISTER" onPress={()=>history.push('/tutorhomepage')}></BlueButton>
        </View>
        
        <View style={styles.backBox}>
            <Text style={styles.textStyle} onPress={()=>history.push('/')}>Back to Sign in</Text>
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
        right:75,
        marginTop:50,
        marginBottom:40,
    },

    inputs: {
        marginBottom:15,
    },

    textStyle: {
        fontSize:18,
        fontWeight:'bold',
    },

    textBox: {
        position:'relative',
        right:120,
    }, 

    selectionBox: {
        display:'flex',
        flexDirection:'row',
        position:'relative',
        top:5,
        right:52,
    },

    buttonBox: {
        marginTop: 40,
    },

    backBox: {
        marginTop:20,
    }
});

export default RegisterPage;
