import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView   } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../colors';
import DismissKeybord from '../components/dismissKeybord';
import Btn from '../components/btn';

export default function NewTodoScreen(props) {
  const [todoText, setTodoText] = useState('');

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.blue.medium}}>
      <DismissKeybord>
        <KeyboardAvoidingView  style={styles.container} behavior='padding'>
          <View><Text style={styles.title}>NEW TODO!</Text></View>
          <TextInput 
            style={styles.todoInput} 
            onChangeText={text => setTodoText(text)}
            placeholder='Digite seu todo'
            placeholderTextColor={colors.blue.medium}
            selectionColor={colors.blue.contrast}
            autoCapitalize='sentences'
            clearButtonMode='always'
            multiline={true}/>
          <Btn color='contrast' text='adicionar' 
            onPress={() => {
              props.route.params.onAdd(todoText);
              navigation.goBack();
            }}/>
          <Btn color='dark' text='voltar' onPress={() => navigation.goBack()}/>
        </KeyboardAvoidingView >
      </DismissKeybord>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue.medium,
    paddingHorizontal: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  todoInput:{
    fontFamily: 'Poppins',
    fontSize: 20,
    marginVertical: 10,
    padding: 10,
    paddingTop: 10,
    borderRadius: 5,
    backgroundColor: colors.blue.light,
    color: colors.blue.dark,
  },
  title: {
    marginTop: 20,
    fontFamily: 'League Spartan',
    fontSize: 50,
    color: colors.blue.contrast
  },
});