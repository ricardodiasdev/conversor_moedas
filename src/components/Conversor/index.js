import { StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard } from "react-native";
import React, {useState} from "react";
import api from "../../services/api";

///convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad

const Conversor = (props) => {
  const { moedaA, moedaB } = props;

  const [valorMoedaB, setValorMoedaB] =useState(0)
  const [valorConvertido, setValorConvertido] = useState(0)
  
  const converter = () => {
    alert("covertido")
    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>
      <TextInput
        placeholder="Valor a ser convertido"
        style={styles.areaInput}
        onChangeText={(valorMoedaB) => {setValorMoedaB(valorMoedaB)}}
        keyboardType='numeric'
      />
      <TouchableOpacity style={styles.btn} onPress={converter}>
        <Text style={styles.btnText}>Converter</Text>
      </TouchableOpacity>
      <Text style={styles.valorConvertido}>{valorConvertido}</Text>
    </View>
  );
};

export default Conversor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  areaInput: {
    width: 240,
    height: 45,
    backgroundColor: '#CCC',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20,
    color: 'black',
    borderRadius: 5

  },
  btn: {
    width: 150,
    height: 45,
    backgroundColor: '#FF0000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  valorConvertido: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
  },
});
