import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, StatusBar, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
export default class LoginForm extends React.Component {

    state = {
        email: '',
        password: '',
        authenticating: false,
    }

    onPressRegisterEvent = () => {
        Actions.RegisterPage();
    }

    onPressLoginEvent = () => {
        if (this.state.email == '' && this.state.password == '') {
            alert("Please enter the Login fields")
        } else {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(user => (
                    console.log("----->, ", user),
                    alert("Welcome User!"),
                    Actions.Mainmenu())
                )
                .catch(error => (
                    console.log("error aii, ", error)),
                )
        }
    }

    renderCurrentState() {
        if (this.state.authenticating) {
            return (
                <View>
                    <ActivityIndicator size='large' />
                </View>
            )
        }

        return (
            <View>
                <StatusBar
                    barStyle="light-content"
                />
                <TextInput
                    style={styles.input}
                    placeholder="username or email"
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}

                />
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    secureTextEntry
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                />

                <TouchableOpacity style={styles.buttonContainer} onPress={this.onPressLoginEvent}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer2} onPress={this.onPressRegisterEvent}>
                    <Text style={styles.buttonText}>REGISTER NOW</Text>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderCurrentState()}
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#fff',
        paddingHorizontal: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 12,
        marginBottom: 7,
        marginTop: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    buttonContainer2: {
        backgroundColor: '#2980b9',
        paddingVertical: 12,
        marginBottom: 7,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    buttonText: {
        textAlign: 'center',
        color: '#ffff',
        fontWeight: '700',
    }
});