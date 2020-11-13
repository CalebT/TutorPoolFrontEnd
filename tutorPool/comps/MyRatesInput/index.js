import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import SmallBubbleBlack from '../SmallBubbleButtonBlack';

const MyRatesInput = ({name}) => {
    return <View>
        <TouchableOpacity style={styles.about}>
        <Text style={styles.description}>{name}</Text>
        <TouchableOpacity style={styles.Arrow}>
        <Image source={require('../../images/pencil.png')}></Image>
        </TouchableOpacity>
        </TouchableOpacity>
       
        <View style={styles.Cont}>
            <View style={styles.RatesCon}>
        <Text style={styles.title}>1st Meeting</Text>
        <View style={styles.Wrapper}>
        <Text style={styles.title}>$</Text>
        <TextInput TextEntry={true} style={styles.inputBox}/>
        </View>
        </View>
       
        <View style={styles.RatesCon}>
        <Text style={styles.title}>30 Mins</Text>
        <View style={styles.Wrapper}>
        <Text style={styles.title}>$</Text>
        <TextInput TextEntry={true} style={styles.inputBox}/>
        </View>
        </View>
       
        <View style={styles.RatesCon}>
        <Text style={styles.title}>1 Hour +</Text>
        <View style={styles.Wrapper}>
        <View style={styles.Wrapper}></View>
        <Text style={styles.title}>$</Text>
        <TextInput TextEntry={true} style={styles.inputBox}/>
        </View>
        </View>
        </View>
    </View>
}

const styles=StyleSheet.create({
    about: {
        flexDirection: "row",
        alignItems: "center",

    },

    description: {
        fontWeight:"500",
        fontSize:18,
        marginRight: 10,
    },

    inputBox: {backgroundColor:"white",
    width:84,
    height:25,
    borderRadius:10,
    borderWidth: 1,
    // marginTop:10,
    // padding: 10,
    fontSize:12,
    borderColor:"black",
        
    },

    Cont: {
        backgroundColor:"#F4F5F5",
        width: 300,
        height: 123,
        marginRight: 10,
        borderRadius:10,
        marginTop:7,

    },

    RatesCon: {
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingTop:13,
        paddingLeft:10,
        paddingRight:10,

    },

    Wrapper: {
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",

    },
});

MyRatesInput.defaultprops = {
    name:"Description",
}

MyRatesInput.propTypes = {
    name:propTypes.string,
}

export default MyRatesInput;