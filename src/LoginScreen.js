import React from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet} from "react-native";

const LoginScreen = ({navigation}) =>{
    const [username,setUsername] = React.useState('')
    const [password,setPassword] = React.useState('')

    const handleLogin = () =>{
        if(username === 'paulo' && password === '2020' ){
            navigation.navigate('Home',{username});
        }else{
            Alert.alert('Login inválido');
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.logo} >Login</Text>
            <TextInput
                style={styles.input} 
                placeholder="Usuário"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input} 
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                segureTextEntry
            />
            <Button title="Entrar" onPress={handleLogin} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
        fontSize:32,
        fontWeight:'bold'
    },
    input:{
        marginTop:10,
        backgroundColor:'#E3E2E2',
        paddingHorizontal:26,
        paddingVertical:12
    }
  });


export default LoginScreen;