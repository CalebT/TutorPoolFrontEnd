import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

const FindaTutorText = ({text,text2}) => {
    return <View >
            <Text style={styles.description}>{text}</Text>
            <Text style={styles.description2}>{text2}</Text>

    </View>
}

const styles=StyleSheet.create({

    description: {
      marginTop:20,
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 18,
      lineHeight: 20,
      /* identical to box height, or 91% */
      
color: "#131515"

    },

    description2: {
      marginTop:7,
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: 20,
      /* identical to box height, or 91% */
color: "#131515"

    }
});

FindaTutorText.defaultprops = {
    text:"Default",
    text2:"Default",
}

FindaTutorText.propTypes = {
    text:propTypes.string,
    text2:propTypes.string,

}

export default FindaTutorText;