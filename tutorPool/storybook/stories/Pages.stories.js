import { storiesOf } from '@storybook/react-native';
import React from 'react';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import StudentHomepage from '../../pages/StudentHomepage';
import PullOutMenu from '../../pages/PullOutMenu';
import SettingsPage from '../../pages/SettingsPage';
import FindTutor from '../../pages/FindTutor';
import MessageTutor from '../../pages/MessageTutor';
import ProfileTutor from '../../pages/ProfileTutor';

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

    .add('Message (Tutor)', () => (
        <MessageTutor />
    ))

    .add('Profile (Tutor)', () => (
        <ProfileTutor />
    ))
    ;