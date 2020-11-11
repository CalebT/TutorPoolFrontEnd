import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

const NavBar = ({homeimg, messageimg, bellimg, userimg}) => {

    

    //const [clicked, setClicked] = useState(false);

    return <View>
        <View style={styles.navbarContainer}>
            <Image style={styles.img} source={homeimg}></Image>
            <Image style={styles.img} source={messageimg}></Image>
            <Image style={styles.img} source={bellimg}></Image>
            <Image style={styles.img} source={userimg}></Image>
        </View>
    </View>
}

const styles=StyleSheet.create({
    navbarContainer: {
        backgroundColor:"#F4F5F5",
        width: 360,
        height: 60,
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection: "row",
        padding: 30

    },

    img: {
        width: 30,
        height: 30
    }
});

NavBar.defaultprops = {
    homeimg: home, 
    messageimg: message, 
    bellimg: bell, 
    userimg: user,
    source:"placeholder"
}

NavBar.propTypes = {
    source:propTypes.string
}

export default NavBar;