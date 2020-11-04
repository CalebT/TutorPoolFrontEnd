import { storiesOf } from '@storybook/react-native';
import React from 'react';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import StudentHomepage from '../../pages/StudentHomepage';
import PullOutMenu from '../../pages/PullOutMenu';

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
    ;