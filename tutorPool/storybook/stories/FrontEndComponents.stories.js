import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import LoginInput from '../../comps/LoginInput';
import PasswordInput from '../../comps/PasswordInput';
import CenterView from './CenterView';
import BlueButton from '../../comps/BlueButton';
import SubjectSquare from '../../comps/SubjectSquare';
import SubjectRectangle from '../../comps/SubjectRectangle';
import SubjectBubble from '../../comps/SubjectBubbles';
import SmallBubbleBlack from '../../comps/SmallBubbleButtonBlack';
import SmallBubble from '../../comps/SmallBubbleButton';
import UserCard from'../../comps/UserCard';
import NavBar from '../../comps/NavBar';
import DeleteButton from '../../comps/DeleteButton';
import TutorName from '../../comps/TutorName';
import AvailableinText from '../../comps/AvailableinText';
import AboutMe from '../../comps/About';
import BackSignIn from '../../comps/BackSignIn';
import BackStudent from '../../comps/BackStudent';
import English from '../../comps/English';

const home = require('../../images/home.png');
const homeactive = require('../../images/home-active.png');
const message = require('../../images/message-circle.png');
const messageactive = require('../../images/message-circle-active.png');
const bell = require('../../images/bell.png');
const bellactive = require('../../images/bell-active.png');
const user = require('../../images/user.png');
const useractive = require('../../images/user-active.png');
const icon = require('../../images/icon.png');

storiesOf('Custom Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Email Input', () => (
    <LoginInput name="Email"/>
  ))
  .add('Password Input', () => (
    <PasswordInput  name="Password"/>
  ))
  .add('Register Button', () =>(
    <BlueButton text="REGISTER NOW"/>
  ))
  .add('Subject Button', () =>(
    <SubjectSquare text="English"/>
  ))
  .add('Subject Rectangle Button', () =>(
    <SubjectRectangle text="Foreign Languages"/>
  ))
  .add('Subject Bubble Button',  () => (
    <SubjectBubble text="History"/>
  ))
  .add('Small Bubble Button', () => (
    <SmallBubble text="Video Calls"/>
  ))
  .add('Small Bubble Button Black', () => (
    <SmallBubbleBlack text="In Person"/>
  ))
  .add('User Card', () => (
    <UserCard text1="Becca Williams" text2="Hello this is the description"/>
  ))
  .add('Nav Bar', () => (
    <NavBar homeimg={home} messageimg={message} bellimg={bell} userimg={user}/>
  ))
  .add("Delete button", () => (
    <DeleteButton text="Delete Account" />
  ))
  .add('Tutor Name', () => (
    <TutorName imgsrc={icon} tutorname="Becca Williams" tutorsubject1="English," tutorsubject2="Art" tutorsubject3=""rating="4.5"/>
  ))
  .add("Available in text", () => (
    <AvailableinText text="Available in"/>
  ))
  .add("About", () => (
    <AboutMe text="blah blahahhh"/>
  ))

  .add("BackSignIn", () => (
    <BackSignIn text="jk"/>
  ))

  .add("BackStudent", () => (
    <BackStudent text="back"/>
  ))

  .add("English", () => (
    <English text="english"/>
  ))


  ;
