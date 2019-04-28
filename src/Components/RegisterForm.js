import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';

export default class RegisterForm extends React.Component {

    state = {
        username: '',
        email: '',
        password: '',
        reepassword: '',
        authenticating: false,
    }

    onPressRegisterEvent = () => {
             
        if (this.state.password != this.state.reepassword) {
            alert("Password doesn't match")
        }
        else {
            console.log(this.state)
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(success => (
                    console.log("success ----->, ", success), Actions.Mainmenu())
                )
                .catch(error => (
                    console.log("error ----->, ", error))
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
                    placeholder="Enter Name"
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.emailInput.focus()}
                    autoCorrect={false}
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    returnKeyType="next"
                    ref={(input) => this.emailInput = input}
                    onSubmitEditing={() => this.passwordInput1.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    secureTextEntry
                    returnKeyType="next"
                    ref={(input) => this.passwordInput1 = input}
                    onSubmitEditing={() => this.passwordInput2.focus()}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Re-enter Password"
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    secureTextEntry
                    returnKeyType="go"
                    ref={(input) => this.passwordInput2 = input}
                    onChangeText={(reepassword) => this.setState({ reepassword })}
                    value={this.state.reepassword}
                />

                <TouchableOpacity style={styles.buttonContainer} onPress={this.onPressRegisterEvent}>
                    <Text style={styles.buttonText}>REGISTER</Text>
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
        marginBottom: 20,
        color: '#fff',
        paddingHorizontal: 10,
        paddingHorizontal: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    buttonContainer: {
        backgroundColor: '#9b600d',
        paddingVertical: 15,
        paddingHorizontal: 10,
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