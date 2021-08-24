import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalculator, faGasPump } from '@fortawesome/free-solid-svg-icons';

//Export na função
export default function App() {

  const [peso,setPeso] = useState(0);
  const [altura,setAltura] = useState(0);
  // const [sexo,setSexo] = useState('M'||'F');

  function calcular(){

    const valor = peso/(altura*altura);
    // const porcentagem = valor*100.
    // const textoBase = porcentagem.toFixed(0)+'% O combustível mais vantajoso é: ';
    if(valor < 18){
      alert(valor+' Abaixo do peso')
    }
    else if ((valor >=18.5 && valor < 24.9)){
      alert('Taxa de imc: '+valor.toFixed(1)+' Peso normal')
    }
    else if((valor >=25 && valor <= 29.9)){
      alert('Taxa de imc: '+valor.toFixed(1)+' Sobrepeso')
    }
    else if((valor >=30 && valor <= 34.9)){
      alert('Taxa de imc: '+valor.toFixed(1)+' Obesidade grau 1')
    }
    else if((valor >=35 && valor <= 39.9)){
      alert('Taxa de imc: '+valor.toFixed(1)+' Obesidade grau 2')
    }
    else if((valor >40)){
      alert('Taxa de imc: '+valor.toFixed(1)+' Obesidade grau 3 ou Mórbida')
    }
 
  }



  return (
    <View style={styles.container}>
       
      <View style={styles.resultado}>
    
        <Text style={styles.titulo}>Digite seu Peso e Altura</Text>
        <TextInput placeholderTextColor='#FFFFFF' placeholder="Peso" style={styles.inputpeso} keyboardType='numeric' onChangeText={ (numero) => setPeso(numero)}></TextInput>
        <TextInput placeholderTextColor='#FFFFFF' placeholder="Altura" style={styles.inputaltura} keyboardType='numeric'onChangeText={(numero) => setAltura(numero)} ></TextInput>
        <View style={{ alignItems: 'center', marginTop:30 }}>
          <TouchableOpacity style={styles.botao} onPress={calcular} >
            <View style={styles.btnArea}>
             <FontAwesomeIcon icon={ faCalculator} color={ '#009159'} size={50}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height:32,  backgroundColor: '#015835'}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    backgroundColor: '#fffff2'
  },
  resultado: {
    flex: 2,
    backgroundColor: '#ffffff'
  },
  titulo: {
    marginTop: 22,
    marginBottom:20,
    fontSize: 30,
    color: '#004080',
    textAlign: 'center',
    fontWeight: 'bold'
    
  },
  inputpeso: {
    margin: 10,
    fontSize: 25,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
    padding: 12,
    backgroundColor: '#025a9e'


  },
  inputaltura: {
    margin: 10,
    fontSize: 25,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
    padding: 12,
    backgroundColor: '#009159'


  }, botao: {
    width: 100,
    height: 65,
    borderWidth: 2,
    borderColor: '#009159',
    borderRadius: 25


  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});