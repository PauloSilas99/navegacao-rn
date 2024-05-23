import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ route,navigation }) => {
  const { username } = route.params;
  const MudarPag = () =>{
    navigation.navigate('Outro');
};
  return (
    <View style={styles.container}>
      <Text>Bem-vindo, {username}!</Text>
      <Text>Esta é a tela principal do aplicativo.</Text>
      <Button 
        title='Próxima Página'
        onPress={MudarPag}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3145F2',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default HomeScreen;