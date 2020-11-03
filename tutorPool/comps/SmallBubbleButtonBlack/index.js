import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

const SmallBubbleBlack = ({text}) => {
    const [selected, setSelected] = useState(false);

    const contStyle = {
        backgroundColor:selected?"#595CFF":"white",
        borderColor:selected?"#595CFF":"#576060",
    }

    const textStyle = {
        color:selected?"white":"#576060",
    }
    return <View >
        <TouchableOpacity
        style={[styles.buttonBox, contStyle]}
        onPress={()=>
            setSelected(!selected)
        }
        >
            <Text             
            style={[styles.description, textStyle]}
            onPress={()=>
                setSelected(!selected)
            }
            >
                {text}</Text>
        </TouchableOpacity>
    </View>
}

const styles=StyleSheet.create({
    buttonBox: {
        backgroundColor:"white",
        borderColor:"#576060",
        borderWidth:1,
        borderRadius:30,
        width:85,
        height:25,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

    },
    description: {
        fontSize:12,
        color:"#595CFF"
    }
});

SmallBubbleBlack.defaultprops = {
    text:"Default",
}

SmallBubbleBlack.propTypes = {
    text:propTypes.string,
}

export default SmallBubbleBlack;