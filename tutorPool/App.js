/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import LoginPage from './pages/LoginPage/index';
import RegisterPage from './pages/RegisterPage/index';
import StudentHomepage from './pages/StudentHomepage/index';
import PullOutMenu from './pages/PullOutMenu';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import ChatBox from './pages/ChatBox';
import FindTutor from './pages/FindTutor';
import ProfileTutor from './pages/ProfileTutor';
import TutorHomepage from './pages/TutorHomepage';
import ProfileStudent from './pages/ProfileStudent';
import ProfileTutorMyRates from './pages/ProfileTutorMyrates';
import SelectTutorPage from './pages/SelectTutorPage';


import { NativeRouter, Route, Link, Switch} from 'react-router-native';

const App = () => {
  return (
    <NativeRouter>
      <View>
        <Switch>
          <Route exact path='/' component={LoginPage}/>
          <Route exact path='/register' component={RegisterPage}/>
          <Route exact path='/studenthomepage' component={StudentHomepage}/>
          <Route exact path='/pulloutmenu' component={PullOutMenu}/>
          <Route exact path='/findtutor' component={FindTutor}/>
          <Route exact path='/studentmessages' component={Messages}/>
          <Route exact path='/notifications' component={Notifications}/>
          <Route exact path='/profiletutor' component={ProfileTutor}/>
          <Route exact path='/tutorhomepage' component={TutorHomepage}/>
          <Route exact path='/chatbox' component={ChatBox}/>
          <Route exact path='/profilestudent' component={ProfileStudent}/>
          <Route exact path='/tutorRates' component={ProfileTutorMyRates}/>
          <Route exact path='/selectTutor' component={SelectTutorPage}/>
        </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor:"red",
    justifyContent:"center",
    alignItems:"center",
  }
})

export default App;
//export {default} from './storybook'; 