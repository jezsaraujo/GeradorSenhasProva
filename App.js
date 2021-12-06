import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity,  Image, StyleSheet, TextInput, ScrollView} from 'react-native';
import styled from 'styled-components/native';

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function App() {
  const [psw, setPsw] = useState('');
  const [size, setSize] = useState('');
  const [tip, setTip] = useState(0);
  
   
   function geraPsw(){
    let pass = '';
    let n = charset.length;

    if (size < 1 || size  > 15 ){
        alert("Tamanho da senha invalido!!")
    }else{
        
        for (let i = 0; i < size; i ++){
            pass += charset.charAt(Math.floor(Math.random() * n))
        }
        
        setPsw(pass);
    }
}



   return (
     <ScrollView>
    <View style = {styles.container}>
         
          <Image source={require('./src/imagens/logo2.png')} 
          style={{width:150, height: 200}} resizeMode='cover'> 
          </Image>
          
         <View style = {styles.container2}>

        <Text style = {styles.title}>{size} Caracteres</Text>
         
         
         <TextInput style = {styles.input}
         value={size}
         onChangeText={n => setSize(n)}
         keyboardType = "numeric"
         placeholder="Tamanho do senha (1-15)" 
         placeholderTextColor="#f0f0"
         ></TextInput>

    
        
      <TouchableOpacity style={styles.button} onPress={geraPsw}>
        <Text style={styles.textButton}>Gerar senha</Text>
      </TouchableOpacity>
 
      {psw  && (
        <View style={styles.area}>
          <Text style={{fontWeight:'bold', fontSize:'15px'}}>{psw}</Text>
          
        </View>

      
      )}     
        </View>
          <Text style= {styles.nomeAlunos}>Jéssika Araujo e Juliana Teixeira</Text>
      
 </View>
     </ScrollView>        
   );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%'
},

container2: {
  
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '5%',
    width: '100%'
},

title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 15
},

input: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#000',
    fontSize: 23,
    width: '90%',
    textAlign: 'center'
},

button: {
    padding: 10,
    backgroundColor: '#845EC2',
    borderRadius: 10,
    width: 200,
    textAlign: 'center',
    marginTop: 20
},

textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
},

area: {
    backgroundColor: '#ddd',
    width: '90%',
    height: 50,
    marginTop: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
},

nomeAlunos: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 30,
    padding: 15,
    marginTop: 5
}
});