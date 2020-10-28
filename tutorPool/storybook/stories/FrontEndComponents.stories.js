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
import SubjectBubbleFull from '../../comps/SubjectBubbleFull';
import SmallBubble from '../../comps/SmallBubbleButton';
import UserCard from'../../comps/UserCard';
import DeleteButton from '../../comps/DeleteButton';

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
  .add('Subject Bubble Full Button', () => (
    <SubjectBubbleFull text="English" />
  ))
  .add('Small Bubble Button', () => (
    <SmallBubble text="Video Calls" borderColor="#576060"/>
  ))
  .add('User Card', () => (
    <UserCard text1="Becca Williams" text2="Hello this is the description" imgsrc={require('../../images/x-circle.png')}/>
  ))
  .add('User Card2', () => (
    <UserCard text1="Becca Williams" text2="Hello this is the description"/>
  ))
  .add("Delete button", () => (
    <DeleteButton text="Delete Account" />
  ))
  ;