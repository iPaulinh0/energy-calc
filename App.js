import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { TextInputMask } from 'react-native-masked-text'
 
export default function App() {
  function handleSubmit() {
    // const calc = ((watts * days * hour) / 1000) * price
    // alert(calc)
    const unmask = priceRef?.current.getRawValue
    alert(unmask)
  }

  const [watts, setWatts] = useState('');
  const [days, setDay] = useState('')
  const [price, setPrice] = useState('')

  function handleSubmit() {
    alert('Você clicou, parabéns!')
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <TextInput
        style={styles.textInput}
        value={watts}
        onChangeText= { (watts) => setWatts(watts) }
        placeholder="Watts"
        keyboardType="numeric" />
      </View>

      <View style={styles.inputs}>
        <TextInput
        style={styles.textInput}
        value={days}
        onChangeText= { (days) => setDay(days) }
        placeholder="Dias"
        keyboardType="numeric" />

        <TextInputMask
        style={styles.textInput}
        type={'money'}
        value={price}
        onChangeText= { (price) => setPrice(price) }
        placeholder="Preço (KWh)"
        keyboardType="numeric" 
        />
      </View>

      <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  inputs: {
    flexDirection: 'row'
  },

  textInput: {
    width: '43%',
    fontSize: 25,
    marginTop: 50,
    textAlign: 'center'
  },

  pickers: {
    height: '43%',
    width: '27%',
    marginTop: 50
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41Aef4',
    padding: 10,
    color: '#FFF',
    borderRadius: 100
  },

  buttonText: {
    color: '#FFF',
    fontSize: 17
  }

});
