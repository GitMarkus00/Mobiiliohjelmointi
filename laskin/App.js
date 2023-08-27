import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [val1, setVal1] = useState('');
  const [valb, setVal2] = useState('');
  const [result, setResult] = useState('');

  const initialFocus = useRef(null);

  const buttonPlusPressed = () => {
    setResult(Number(val1) + Number(valb));
    initialFocus.current.focus();
    setVal1('')
    setVal2('');
  };

  const buttonMinusPressed = () => {
    setResult(Number(val1) - Number(valb)); 
    initialFocus.current.focus();
    setVal1('')
    setVal2('');
  };

  
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
        ref={initialFocus}
        style={styles.input}
        keyboardType='number-pad'
        onChangeText={vala => setVal1(Number(vala))}
        value={val1}
      />
      <TextInput
        style={styles.input}
        keyboardType='number-pad'
        onChangeText={valb => setVal2(Number(valb))}
        value={valb}
      />

      <View style={styles.buttonContainer}>
        <Button onPress={buttonPlusPressed} title="+" />
        <View style={styles.spacing} />
        <Button onPress={buttonMinusPressed} title="-" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacing: {
    width: 10,
  },
});