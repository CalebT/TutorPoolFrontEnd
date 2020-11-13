import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

const SettingsToggle = () => {

    const [clicked, setClicked] = useState(false);

    const contStyle = {
        backgroundColor:clicked?"#06D6A0":"#F4F5F5",
    }

    const roundStyle = {
        justifyContent:clicked? "flex-start":"flex-end",
    }
    return <View>
        <TouchableOpacity
            style={[styles.container, contStyle, roundStyle]} 
            onPress={()=>
                setClicked(!clicked)
            }>
                <View style={styles.toggle}></View>
        </TouchableOpacity>
    </View>
}

const styles=StyleSheet.create({
   container:{
        width: 60,
        height: 30,
        backgroundColor: "#F4F5F5",
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
   },

   toggle:{
        width: 26,
        height: 26,
        backgroundColor: "#FFFFFF",
        borderRadius: 25,
        justifyContent: "flex-start",
        margin: 2
   },
});

SettingsToggle.defaultprops = {

}

SettingsToggle.propTypes = {

}

export default SettingsToggle;