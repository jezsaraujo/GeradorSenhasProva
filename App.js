import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity,  Image, StyleSheet} from 'react-native';
import styled from 'styled-components/native';



const HeaderText = styled.Text`
    fontSize: 30;
`;

const Input = styled.TextInput`
   width: 90%;
   height: 50px;
   font-size:18px;
   background-color:#EEE;
   margin-top:20px;
   border-radius:10px;
   padding:10px;
`;


const Page = styled.SafeAreaView`
flex: 1;
align-items:center;
margin-top: 15;
background-color: '#f3f3ff'

`;

const ResultItem = styled.Text`
font-size:20px;
margin-bottom:50px;

`;


let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function App() {
  const [psw, setPsw] = useState('');
  const [size, setSize] = useState('');
  const [tip, setTip] = useState(0);
  
   //função para gerar senha
   function geraPsw(){
    let pass = '';
    let n = charset.length;

    if (size < 1 || size  > 15 ){
        alert("Tamanho da senha invalido!!")
    }else{
        //copia caracteres aleatorios para a senha 
        for (let i = 0; i < size; i ++){
            pass += charset.charAt(Math.floor(Math.random() * n))
        }
        //att o campo senha
        setPsw(pass);
    }
}



   return (
      <Page>
          <View style={styles.container}>
          <Image source={require('./src/imagens/R.png')} 
          style={styles.logo}
          
          />
      </View>
         <HeaderText>{size} Caracteres</HeaderText>
         <Input
            placeholder="Tamanho do senha (1-15)"
            placeholderTextColor="#000"
            value={size}
            onChangeText={n => setSize(n)}//alterando o campo de entrada
         />

      
        
      <TouchableOpacity style={styles.button} onPress={geraPsw}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      {psw !== '' && (
        <View style={styles.area}>
          <Text style={styles.psw}>{psw}</Text>
          
        </View>
      )}     
        
          <ResultItem>Jéssika Araujo</ResultItem>
          <ResultItem>Juliana Teixeira</ResultItem>
      </Page>

   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3ff'
  },

  psw: {
    padding: 20,
    textAlign: 'center',
    fontSize: 20,
  },

  button: {
    backgroundColor: '#00BFFF',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 25,
  },

  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 7,
  },
  logo: {
    marginBottom: 60,
    width:'150px',
    height:'200px',
  },
});