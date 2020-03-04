import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Alert  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../colors';

export default function Todo(props) {
  const [flag, setFlag] = useState(0);
  const [bg, setBg] = useState('#357f5c');
  const [iconName, setIconName] = useState('check');
  
  useEffect(() => {
    if(flag == 1) {
      setBg('#E81D1D');
      setIconName('trash-o');
      setTimeout(() => {
        if(flag == 1){
          setFlag(0);
          setBg('#357f5c');
          setIconName('check');
      }}, 2000);
    } else if(flag == 2) {
      let aux = props.text;
      clearTimeout()
      props.onPress();
      // Alert.alert('Todo apagado', aux);
    }
  }, [ flag ]);

  return (
    <View style={styles.todo}>
      <Text style={styles.todoText}>{props.text}</Text>
      <TouchableOpacity style={[styles.todoDelete, {backgroundColor: bg}]} onPressOut={() => props.onPress()}>
        <FontAwesome name={iconName} size={20} color={colors.blue.light} />
      </TouchableOpacity>
    </View>
  );
}

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 10,
    backgroundColor: colors.blue.contrast,
    borderRadius: 5,
  },
  todoText: {
    maxWidth: width - 40 - 20 - 10 - 40,
    fontFamily: 'Poppins',
    fontSize: 20,
    color: colors.blue.light,
    margin: 5,
  },
  todoDelete: {
    width: 40,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});