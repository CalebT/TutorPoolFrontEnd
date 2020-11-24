import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';


const PullOutMenu = ({history}) => {
    return <View style={styles.viewCont}>
        <View onPress={()=>props.history.goBack()}>
            <Image style={styles.close} source={require('../../images/whiteCloseCircle.png')} />
        </View>
        <View style={styles.selectionBox}>
            <Text style={styles.fontStyle} onPress={()=>history.push('/studenthomepage')}>Homepage</Text>
            <Text style={styles.fontStyle} onPress={()=>history.push('/studentmessages')}>Messages</Text>
            <Text style={styles.fontStyle} onPress={()=>history.push('/Notifications')}>Notifications</Text>
            <Text style={styles.fontStyle} onPress={()=>history.push('/profiletutor')}>Profile</Text>
            <Text style={styles.fontStyle} onPress={()=>history.push('/studenthomepage')}>Payment</Text>
        </View>
        <Text style={styles.signout} onPress={() => history.push('/')}>Sign Out</Text>
        <Image style={styles.logo} source={require('../../images/LogoWhite.png')} />
    </View>
}

const styles=StyleSheet.create({
    viewCont: {
        display:'flex',
        alignItems:'center',
        backgroundColor:'#595CFF',
        height:'100%',
    },

    close: {
        right:150,
        top:60,
        
    },

    fontStyle: {
        color:'white',
        fontWeight:'bold',
        fontSize:18,
        margin:20,
    },

    selectionBox: {
        right:90,
        top:140
    },

    signout: {
        position:'absolute'
 ,       color:'white',
        fontSize:18,
        fontWeight:"600",
        marginBottom:70,
        bottom:110,
    },

    logo: {
        position:'absolute',
        bottom:40,
    }
});

export default PullOutMenu;
