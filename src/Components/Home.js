import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';

import LoginForm from './LoginForm';
import RegisterPage from './RegisterPage';

export default class Home extends React.Component {

    render( ){
        
        return(
            
            <View style={styles.container}>
                <KeyboardAvoidingView style={styles.logoContainer}>
                    <Image
                        style={styles.logo1}
                        source={require('../assets/PFLogo.png')}
                    />
                    <Image
                        style={styles.logo}
                        source={require('../assets/logo1.png')}
                    />
                    <Text style={styles.title}>An app that determines the market value of second hand products</Text>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView style={styles.formContainer}>
                <LoginForm/>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3498db',

    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logo1: {
        alignSelf: 'center',
        width: '90%',
        height: '20%',
        marginBottom: 50,
    },
    title: {
        color: '#fff',
        marginTop: 10,
        width: 300,
        textAlign:'center',
        opacity: 0.9,
    },
  });