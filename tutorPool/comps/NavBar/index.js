import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import propTypes from 'prop-types';

const NavBar = ({homeimg, messageimg, bellimg, userimg, onPress1, onPress2, onPress3, onPress4}) => {
    //const [clicked, setClicked] = useState(false);

    return <View style={styles.navbarContainer}>
            <TouchableOpacity style={styles.imgBox} onPress={onPress1}>
                <Image style={styles.img} source={homeimg}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imgBox} onPress={onPress2}>
                <Image style={styles.img} source={messageimg}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imgBox} onPress={onPress3}>
                <Image style={styles.img} source={bellimg} ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imgBox} onPress={onPress4}>
                <Image style={styles.img} source={userimg}></Image>
            </TouchableOpacity>
        </View>
}

const styles=StyleSheet.create({
    navbarContainer: {
        backgroundColor:"white",
        width: 400,
        height: 60,
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection: "row",
        padding: 30

    },

    imgBox: {
        width:50,
        height:40
    },

    img: {
        width: 30,
        height: 30
    }
});

NavBar.defaultprops = {
    homeimg: "", 
    messageimg: "", 
    bellimg: "", 
    userimg: "",
    source:"placeholder",
    onPress1:()=>{},
    onPress2:()=>{},
    onPress3:()=>{},
    onPress4:()=>{},
}

NavBar.propTypes = {
    source:propTypes.string
}

export default NavBar;