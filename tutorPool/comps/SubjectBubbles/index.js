import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

const SubjectBubble = ({text}) => {
    const [selected, setSelected] = useState(false);

    const contStyle = {
        backgroundColor:selected?"#595CFF":"white"
    }

    const textStyle = {
        color:selected?"white":"#595CFF",
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
            }>
                {text}
            </Text>
        </TouchableOpacity>
    </View>
}

const styles=StyleSheet.create({
    buttonBox: {
        backgroundColor:"white",
        borderColor:"#595CFF",
        borderWidth:3,
        borderRadius:30,
        width:110,
        height:35,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

    },
    description: {
        fontSize:16,
        color:"#595CFF"
    }
});

SubjectBubble.defaultprops = {
    text:"Default",
}

SubjectBubble.propTypes = {
    text:propTypes.string,
}

export default SubjectBubble;