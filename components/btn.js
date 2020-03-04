import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../colors';

export default function Btn(props) {
  let bg, text;

  switch(props.color) {
    case 'dark':
      bg = colors.blue.dark;
      text = colors.blue.light;
      break;
    case 'light':
      bg = colors.blue.light;
      text = colors.blue.medium;
      break;
    case 'contrast':
      bg = colors.blue.contrast;
      text = colors.blue.light;
      break;
    default:
      bg = colors.blue.medium;
      text = colors.blue.contrast;
      break;
  }

  return (
    <TouchableOpacity style={[styles.btn, {backgroundColor: bg}]} onPress={props.onPress}>
      <Text style={[styles.btnText, {color: text}]}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginVertical: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    fontSize: 20,
    fontFamily: 'League Spartan',
    marginRight: 10,
  },
});