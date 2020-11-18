import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import propTypes from "prop-types";


const Rates = ({ text1, text2, text3, imgsrc }) => {
    return (
        <View>
            <Text style={styles.MyRates}>My Rates</Text>
            <View style={styles.Rates}>
            <TouchableOpacity style={styles.Box}>
            <TouchableOpacity style={styles.Free}><Text style={styles.Txt}>{text1}</Text>
            </TouchableOpacity>
            <Text>1st Meeting</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.Box}>
            <TouchableOpacity style={styles.Circle}><Text style={styles.Txt}>{text2}</Text>
            </TouchableOpacity>
            <Text>30 Mins</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Box}>
            <TouchableOpacity style={styles.Circle}><Text style={styles.Txt}>{text3}</Text>
            </TouchableOpacity>
            <Text>1 Hour +</Text>
            </TouchableOpacity>
        </View>
        </View>
    
    );
};

const styles = StyleSheet.create({
    Rates: {
        flexDirection:"row",

    },

    MyRates: {
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 20,
    },

    Free: {
    width: 50,
    height: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#61F4DE",
    margin: 20,

    },

    Circle: {
    width: 50,
    height: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#595CFF",
    margin: 20,

    },

    Txt: {
    color: "#FFF",
    },

    Box: {
        alignItems: "center",
    },

});

Rates.defaultprops = {
    text1: "Default",
    text2: "Default",
    text3: "Default"

};

Rates.propTypes = {
    text: propTypes.string
};

export default Rates;
