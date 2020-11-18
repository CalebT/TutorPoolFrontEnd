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
import BackArrow from '../../comps/BackArrow';
import BlueSubjectText from '../../comps/BlueSubjectText';
import AboutInput from '../../comps/AboutInput';
import OtherSubjectInput from '../../comps/OtherSubjectInput';
import EditProfile from '../../comps/EditProfile';
import MyRatesInput from '../../comps/MyRatesInput';
import SendChatInput from '../../comps/SendChatInput';
import TutorNameEdit from '../../comps/TutorNameEdit';
import Rates from '../../comps/Rates';
import RequestTutoring from '../../comps/RequestTutoring';
import TopNav from '../../comps/TopNav';
import SettingsToggle from '../../comps/SettingsToggle';
import ChatContainerR from '../../comps/ChatContainer';
import EditButton from '../../comps/EditButton';
import FindTutorBox from '../../comps/FindTutorBox';
import Review from '../../comps/Review';
import NewMsgBox from '../../comps/NewMsgBox';
import NewReviewBox from '../../comps/NewReviewBox';


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
    <UserCard text1="Becca Williams" text2="Hello this is the description" />
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
    <AboutMe text="Hi! My name is Becca Williams and I am a tutor. I have always tutored when I was at school and specialize in English and Arts. Let’s learn together!"/>
  ))

  .add("BackArrow", () => (
    <BackArrow text="Back to Sign In"/>
  ))

  .add("BlueSubjectText", () => (
    <BlueSubjectText text="English"/>
  ))

  .add('About Input', () => (
    <AboutInput  name="About Me"/>
  ))

  .add('Other Subject Input', () => (
    <OtherSubjectInput  name="Other Subject"/>
  ))

  .add('Edit Profile', () => (
    <EditProfile  text1="John Doe" text2="Student"/>
  ))

  .add('My Rates Input', () => (
    <MyRatesInput  name="My Rates"/>
  ))

  .add('Send Chat Input', () => (
    <SendChatInput />
  ))
  .add('Tutor Name Edit', () => (
    <TutorNameEdit imgsrc={icon} tutorname="Becca Williams" tutorsubject1="English," tutorsubject2="Art" tutorsubject3=""/>
  ))

  .add('Rates', () => (
    <Rates text1="Free" text2="$20" text3="$30"/>
  ))

  .add('Request Tutoring', () => (
    <RequestTutoring text="REQUEST TUTORING"/>
  ))

  .add('Top Nav', () => (
    <TopNav />
  ))

  .add('Settings Toggle', () => (
    <SettingsToggle />
  ))

  .add("ChatContainerR", () => (
    <ChatContainerR text="hello" />
  ))

  .add("Find Tutor Box", () => (
    <FindTutorBox text1="Becca Williams" text2="English, Art" text3="4.5"/>
  ))

  .add("Review", () => (
    <Review text1="Writing essays has never been easy for our daughter, but you have managed to help her out. She is more confident when it comes [...]" text2="Bob Smith" text3="5.0"/>
  ))

  .add("New Msg Box", () => (
    <NewMsgBox text1="Becca Williams" text2="English, Art" text3="1 hour ago"/>
  ))

  .add("New Review Box", () => (
    <NewReviewBox text1="Jen Student" text2="Wrote Down a review." text3="1 hour ago"/>
  ))


  ;
