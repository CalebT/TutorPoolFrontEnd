import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import propTypes from 'prop-types';

const StudentProfile = ({text1, text2, imgsrc}) => {
    return <View >
        <TouchableOpacity style={styles.buttonBox}>
            <View style={styles.imageCont}>
                <Image style={styles.image} source={imgsrc}></Image>
            <TouchableOpacity style={styles.camera}>
                <Image source={require('../../images/camera.png')}></Image>
                </TouchableOpacity>
                </View>
            <Text style={styles.name}>{text1}</Text>
            <Text style={styles.description}>{text2}</Text>
        </TouchableOpacity>
    </View>
}

const styles=StyleSheet.create({
    buttonBox: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },

    name: {
        fontSize:16,
        fontWeight:"bold",
    },

    description: {
        fontSize:14,
    },

    imageCont: {
        flexDirection:"row",
    },
    image: {
        resizeMode:'contain',
        maxWidth:60,
        top:-10,
        marginLeft:10,
    },

    camera: {
        backgroundColor: "#3A86FF",
        alignItems:"center",
        justifyContent:"center",
        width:30,
        height:30,
        borderRadius:100,
        marginLeft: -15,
        marginTop: 25

    }
});

StudentProfile.defaultProps = {
    text1:"Default",
    text2:"Default",
    source:"placeholder",
    imgsrc:require('../../images/icon.png')
}

StudentProfile.propTypes = {
    text1:propTypes.string,
    text2:propTypes.string,
    source:propTypes.string,
}

export default StudentProfile;