import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

const NavBar = ({home, message, bell, user}) => {

    //const [clicked, setClicked] = useState(false);

    return <View>
        <View style={styles.navbarContainer}>
            <Image style={styles.img} source={home}></Image>
            <Image style={styles.img} source={message}></Image>
            <Image style={styles.img} source={bell}></Image>
            <Image style={styles.img} source={user}></Image>
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
    home:require('../../images/home.png'),
    homeactive:require('../../images/home-active.png'),
    message:require('../../images/message-circle.png'),
    messageactive:require('../../images/message-circle-active.png'),
    bell:require('../../images/bell.png'),
    bellactive:require('../../images/bell-active.png'),
    user:require('../../images/user.png'),
    useractive:require('../../images/user-active.png'),
    source:"placeholder"
}

NavBar.propTypes = {
    source:propTypes.string
}

export default NavBar;