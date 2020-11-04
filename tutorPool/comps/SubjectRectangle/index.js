import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

const SubjectRectangle = ({text}) => {
    const [selected, setSelected] = useState(false);

    const contStyle = {
        borderWidth:selected?3:0,
        elevation:selected?0:10,
    }

    const textStyle = {
        color:selected?"#595CFF":"#131515",
    }


    return <View >
        <TouchableOpacity
        style={[styles.buttonBox, contStyle]}
        onPress={()=>
            setSelected(!selected)
        }
        >
            <Text 
            style={styles.description, textStyle} 
            onPress={()=>
                setSelected(!selected)
            }
            >
                {text}
            </Text>
        </TouchableOpacity>
    </View>
}

const styles=StyleSheet.create({
    buttonBox: {
        margin:7,
        marginBottom:-12,
        backgroundColor:"white",
        borderWidth:3,
        borderColor:"#595CFF",
        elevation:10,
        borderRadius:10,
        width:193,
        height:90,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

    },
    description: {
        fontSize:18,
    }
});

SubjectRectangle.defaultprops = {
    text:"Default",
}

SubjectRectangle.propTypes = {
    text:propTypes.string,
}

export default SubjectRectangle;