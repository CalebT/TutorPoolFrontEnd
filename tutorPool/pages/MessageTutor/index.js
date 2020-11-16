import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import NavBar from '../../comps/NavBar';
import TopNav from '../../comps/TopNav';


const MessageTutor = ({}) => {
    return <View style={styles.viewCont}>
        <TopNav />
        <View style={styles.navbarBox}>
        <Text>Messages</Text>
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

});

export default MessageTutor;
