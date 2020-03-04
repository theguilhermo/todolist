import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import colors from '../colors';
import Todo from '../components/todo';
import Btn from '../components/btn';

export default function HomeScreen() {
  const [todos, setTodos] = useState([
    'teste'
  ]);

  function removeTodo(index) { 
    let aux = [...todos];
    aux.splice(index, 1);
    setTodos(aux);
  }

  function addTodos(text) {
    let aux = [ text, ...todos ];
    setTodos(aux);
  }

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.blue.dark}}>
      <View style={styles.container}>
        <Text style={styles.title}>TodoList!</Text>
        <FlatList
        ListHeaderComponent={<Btn color='light' text='adicionar novo todo' 
          onPress={() => navigation.navigate('NewTodo', { onAdd: addTodos })}/>}
        data={todos}
        renderItem={({item, index, separators}) => <Todo text={item} onPress={() => removeTodo(index)}/>}
        keyExtractor={(item, index) => String(index)}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue.dark,
    padding: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'League Spartan',
    fontSize: 50,
    color: colors.blue.medium
  },
  addBtn: {
    height: 50,
    backgroundColor: colors.blue.light,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  addBtnText: {
    fontSize: 20,
    fontFamily: 'League Spartan',
    color: colors.blue.contrast,
    marginRight: 10,
  },
});

{/* <ScrollView>
  <Todo text='teste'/>
  <Todo text='ipsum brasiliam arahabe text a b u a a bb'/>
  <Todo text='teste final'/>
</ScrollView> */}