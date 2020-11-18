import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import propTypes from 'prop-types';

const FindTutorBox = ({text1, text2, text3, imgsrc}) => {
    return <View >
        <TouchableOpacity style={styles.buttonBox}>
            <View style={styles.imageCont}>
                <Image style={styles.image} source={imgsrc}></Image>
            </View>

            <View style={styles.Tutor}>
            <Text style={styles.name}>{text1}</Text>
            <Image style={styles.star} source={require('../../images/star.png')}></Image>
            <Text style={styles.Num}>{text3}</Text>
            </View>
            <Text style={styles.description}>{text2}</Text>
            <Image style={styles.board} source={require('../../images/clipboard.png')}></Image>
        </TouchableOpacity>
    </View>
}

const styles=StyleSheet.create({
    buttonBox: {
        backgroundColor:"white",
        borderRadius:10,
        elevation:10,
        width:281,
        height:100,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 1,  
    },

    description: {
        fontSize:14,
        fontWeight:"bold",
        position:"absolute",
        left:45,
        top:50,
    },

    imageCont: {
        position:"absolute",
        left:-30,
        width:60,
        height:60,
        borderRadius:50,
        backgroundColor:"white",
    },
    image: {
        resizeMode:'contain',
        maxWidth:60,
        top:-10,
    },

    Tutor: {
        display:"flex",
        flexDirection:"row",
        position:"absolute",
        top:20,
        left:45,

    },

    name: {
        fontSize:16,
        fontWeight:"bold",
    },

    star: {
        height:15,
        width:15,
        marginLeft:3,

    },

    Num: {
        color:"#595CFF",
        fontWeight:"bold",
        marginLeft:3,
    },

    board: {
        position:"absolute",
        right:-30,

    },
});

FindTutorBox.defaultProps = {
    text1:"Default",
    text2:"Default",
    text3:"Default",
    source:"placeholder",
    imgsrc:require('../../images/icon.png')
}

FindTutorBox.propTypes = {
    text1:propTypes.string,
    text2:propTypes.string,
    source:propTypes.string,
}

export default FindTutorBox;