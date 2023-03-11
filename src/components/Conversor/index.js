import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import api from "../../services/api";

const Conversor = (props) => {
  const { moedaA, moedaB } = props;

  const [valorMoedaB, setValorMoedaB] = useState();
  const [valorCovertido, setValorConvertido] = useState();

  const converter = async () => {
    await api
      .get(`json/last/${moedaA}-${moedaB}`)
      .then((response) => {
        let cotacao = response.data.USDBRL.high;
        setValorConvertido((cotacao * parseFloat(valorMoedaB)).toFixed(2));
        Keyboard.dismiss();
      })
      .catch((error) => console.log(error));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        {moedaA} para {moedaB}
      </Text>
      <TextInput
        placeholder="Valor a ser convertido"
        style={styles.areaInput}
        onChangeText={(valorMoedaB) => {
          setValorMoedaB(valorMoedaB);
        }}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.btn} onPress={converter}>
        <Text style={styles.btnText}>Converter</Text>
      </TouchableOpacity>
      <Text style={styles.valorConvertido}>{valorCovertido > 0 ? valorCovertido : ''}</Text>
    </View>
  );
};

export default Conversor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  areaInput: {
    width: 240,
    height: 45,
    backgroundColor: "#CCC",
    textAlign: "center",
    marginTop: 15,
    fontSize: 20,
    color: "black",
    borderRadius: 5,
  },
  btn: {
    width: 150,
    height: 45,
    backgroundColor: "#FF0000",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  valorConvertido: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 15,
  },
});
