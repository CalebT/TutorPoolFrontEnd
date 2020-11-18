import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import NavBar from '../../comps/NavBar';
import TopNav from '../../comps/TopNav';
import English from '../../comps/English';
import UserCard from '../../comps/UserCard';

const FindTutor = ({history}) => {
    return <View style={styles.viewCont}>
        <View style={styles.topNavBox}>
            <TopNav onPress1={()=>history.push('/pulloutmenu')}/>
        </View>
        <Text style={styles.text}>Find a Tutor</Text>
        <View style={styles.subSelect}>
            <English text="English"/>
            <English text="Science"/>
        </View>
        <ScrollView>
            <View style={styles.tutorBox}>
                <UserCard text1="Becca Williams" text2="English, Science, Art" source="becca"/>
                <UserCard text1="Anna Smith" text2="English, Science, Geography"/>
                <UserCard text1="Becca Williams" text2="Science, Art, History"/>
                <UserCard text1="Becca Williams" text2="English, French"/>
                <UserCard text1="Becca Williams" text2="Science, Math"/>
                <UserCard text1="Becca Williams" text2="English, Math, Art"/>
            </View>
        </ScrollView>
            
        <View style={styles.navbarBox}>
            <NavBar/>
        </View>
    </View>
}

const styles=StyleSheet.create({
    viewCont: {
        display:"flex",
        backgroundColor:'white',
        marginTop:40,

    },

    topNavBox:{

    },

    text: {
        fontSize:22,
        fontWeight:'bold',
        marginTop:30,
        marginLeft:30,
    },

    subSelect: {
        display:'flex',
        flexDirection:'row',
        marginLeft:8,
        marginTop:10
    },

    navbarBox: {
        display:'flex',
        alignContent:'center',
        position:'absolute',
        bottom:-98
    },

    tutorBox: {
        backgroundColor:'white',
        width:300,
        height: 500,
        borderColor: "#000",
        marginLeft: 45,
        display:'flex',
        alignItems:'center',
        overflow:'scroll',
    },
});

export default FindTutor;
