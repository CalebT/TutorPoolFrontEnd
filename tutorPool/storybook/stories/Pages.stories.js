import { storiesOf } from '@storybook/react-native';
import React from 'react';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import StudentHomepage from '../../pages/StudentHomepage';
import PullOutMenu from '../../pages/PullOutMenu';
import SettingsPage from '../../pages/SettingsPage';
import FindTutor from '../../pages/FindTutor';
import ProfileTutor from '../../pages/ProfileTutor';
import ProfileTutorMyrates from '../../pages/ProfileTutorMyrates';
import ChatBox from '../../pages/ChatBox';
import Notifications from '../../pages/Notifications';
import Messages from '../../pages/Messages';

storiesOf('Pages', module)
    .add('Login Page', () => (
        <LoginPage/>
    ))
    .add('Register Page', () => (
        <RegisterPage/>
    ))
    .add('Student Homepage', () => (
        <StudentHomepage />
    ))
    .add('Pull out Menu', () => (
        <PullOutMenu />
    ))
    .add('Settings Menu', () => (
        <SettingsPage />
    ))

    .add('Find A Tutor', () => (
        <FindTutor />
    ))

    .add('Profile (Tutor)', () => (
        <ProfileTutor />
    ))

    .add('Profile My Rates(Tutor)', () => (
        <ProfileTutorMyrates />
    ))

    .add('ChatBox', () => (
        <ChatBox />
    ))

    .add('Notifications', () => (
        <Notifications />
    ))

    .add('Messages', () => (
        <Messages />
    ))
    ;