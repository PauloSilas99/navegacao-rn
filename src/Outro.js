import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Outro = ({ navigation }) => {
    const MudarPagLogin = () =>{
        navigation.navigate('Login');
    }
  return (
    <View style={styles.container}>
        <Text>Bem-vindo!</Text>
        <Text>Esta é a outra tela do aplicativo.</Text>
        <Text>Clique no ícone para voltar ao Login</Text>
        <MaterialCommunityIcons name="home-switch" onPress={MudarPagLogin} style={styles.icone}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icone:{
        marginTop:40,
        color:'blue',
        fontSize:64
    }
    
  });

export default Outro;