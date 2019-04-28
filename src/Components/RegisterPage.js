import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default class RegisterPage extends React.Component {

    render( ){
        return(
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.logoContainer}>
                <Image
                        style={styles.log}
                        source={require('../assets/PFLogo.png')}
                    />
                <Text style={styles.topTitle}>Register Here</Text>
                    <Image
                        style={styles.logo}
                        source={require('../assets/logo1.png')}
                    />
                    <Text style={styles.title}>An app that determines the market value of second hand products</Text>
                </View>
                <View style={styles.formContainer}>
                    <RegisterForm/>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dd8100',
     
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
    topTitle: {
        fontSize: 50,
        marginBottom: 20,
    }
  });