import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { TextInputMask } from 'react-native-masked-text'
 
export default function App() {

  const [watts, setWatts] = useState(); // Captura valor do input "Watts"
  const [days, setDay] = useState(); // Captura valor do input "Days"
  const [price, setPrice] = useState(); // Captura valor do input "Price"
  const [hour, setHour] = useState(); // Captura valor do input "Hour"
  const [calc, setCalc] = useState() // Captura os valores acima e realiza o cálculo"
  const priceRef = useRef(null) // Desmascara o valor do TextInputMask de "Price"

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <TextInput // Input de informação de quantos watts possui o aparelho
        style={styles.textInput}
        value={watts}
        onChangeText= { (watts) => setWatts(watts) } // Função de armazenamento do valor digitado
        placeholder="Watts"
        keyboardType="numeric" //Estilo de teclado numérico
        /> 

        <Picker // Input para seleção de horas que o aparelho fica ligado (por dia)
        selectedValue={hour}
        onValueChange={(itemHour, itemIndex) => setHour(itemHour)}
        style={styles.pickers}
        >
          {/* Itens disponível para seleção do picker */}
          <Picker.Item label="Horas p/ dia"/>
          <Picker.Item label="01 Hora" value="01" />
          <Picker.Item label="02 Horas" value="02" />
          <Picker.Item label="03 Horas" value="03" />
          <Picker.Item label="04 Horas" value="04" />
          <Picker.Item label="05 Horas" value="05" />
          <Picker.Item label="06 Horas" value="06" />
          <Picker.Item label="07 Horas" value="07" />
          <Picker.Item label="08 Horas" value="08" />
          <Picker.Item label="09 Horas" value="09" />
          <Picker.Item label="10 Horas" value="10" />
          <Picker.Item label="11 Horas" value="11" />
          <Picker.Item label="12 Horas" value="12" />
          <Picker.Item label="13 Horas" value="13" />
          <Picker.Item label="14 Horas" value="14" />
          <Picker.Item label="15 Horas" value="15" />
          <Picker.Item label="16 Horas" value="16" />
          <Picker.Item label="17 Horas" value="17" />
          <Picker.Item label="18 Horas" value="18" />
          <Picker.Item label="19 Horas" value="19" />
          <Picker.Item label="20 Horas" value="20" />
          <Picker.Item label="21 Horas" value="21" />
          <Picker.Item label="22 Horas" value="22" />
          <Picker.Item label="23 Horas" value="23" />
          <Picker.Item label="24 Horas" value="24" />
        </Picker>
      </View>

      <View style={styles.inputs}>
        <TextInput //Input de informação de quantos dias o aparelho fica ligado
        style={styles.textInput}
        value={days}
        onChangeText= { (days) => setDay(days) }
        placeholder="Dias"
        keyboardType="numeric" />

        {/* Biblioteca TextInputMask para formatação do input */}
        <TextInputMask // Input de informação de qual é o valor do Kilowatt/hora
        style={styles.textInput}
        type={'money'} // Tipo de input
        options={{
          separator: ',' // Separador de real - centavo
        }}
        value={price}
        onChangeText={ (price) => setPrice(price) }
        placeholder="Preço (KWh)"
        keyboardType="numeric" 
        ref={priceRef} // useRef para converter o valor de real para um número
        />
      </View>

      {/* Botão com função de calcular e validar campos */}
      <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const unmask = priceRef?.current.getRawValue() // Função de transformar o valor do input de real para número normal

              {/* Valida se o campo "Watts" foi preenchido */}
              if(watts === undefined || watts === "") {
                alert("Há campos vazios!")
              {/* Valida se foi selecionado alguma hora */}
              }else if(hour === undefined){
                alert("Há campos vazios!")
              {/* Valida se o campo "Dias" foi preenchido */}
              }else if(days === undefined || days === ""){
                alert("Há campos vazios!")
              {/* Valida se existe algum valor acima de R$0,01 foi inserido no campo "Preço KW/h" foi preenchido */}  
              }else if(unmask === 0 || NaN){
                alert("Há campos vazios!")  
              }
              // Faz a soma do resultado e armazena em uma variável "calc"
              else{
                const calc = ((watts * days * hour) / 1000) * unmask
                setCalc(calc)
              }
          }}>
          <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>


        {/* View para visualização do cálculo */}    
        <View style={styles.resContainer}>

          {/* TextInputMask com o valor do cálculo para uma visualização formatada do gasto do aparelho */}   
          <TextInputMask
          style={styles.valueInput}
          type={'money'}
          value={calc}
          editable={false}>
          </TextInputMask>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  // Estilo do container principal
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  // Estilo de alinhamento dos inputs
  inputs: {
    flexDirection: 'row'
  },

  // Estilo dos inputs
  textInput: {
    width: '43%',
    fontSize: 25,
    marginTop: 50,
    textAlign: 'center'
  },

  // Estilo do input picker
  pickers: {
    height: '43%',
    width: '45%',
    marginTop: 50
  },

  // Estilo do botão
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#41Aef4',
    padding: 10,
    color: '#FFF',
    borderRadius: 100
  },

  // Estilo de texto do botão
  buttonText: {
    color: '#FFF',
    fontSize: 17
  },

  // Estilo do container de resposta
  resContainer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  // Estilo de input de resposta
  valueInput: {
    fontSize: 50,
  },
});
