import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';



export default class PostAddT_Page extends React.Component {

    Mainmenu(){
        Actions.Mainmenu();
    }
    render( ){
        
        return(
            <ImageBackground source={require('../assets/bgelse.png')}
            style={{resizeMode: 'stretch', height:'100%', width:'100%'}}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                
                <View style={styles.logoContainer}>
                <Text style={styles.topTitle}>Post an Advertisement</Text>
                <Text style={styles.title}>SUBSCRIPTION </Text>
                <TextInput
                    style={styles.input2}
                    placeholder="Price in LKR"
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    returnKeyType="next"
                />
                <Text style={styles.title}>Provide the price (Optional)</Text>    
                <TextInput
                    style={styles.input2}
                    placeholder="Price in LKR"
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    returnKeyType="next"
                />
                    <Image
                        style={styles.pic}
                        source={require('../assets/p3.png')}
                    />
                    
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.UploadImage}>
                        <Text style={styles.buttonText}>Next  --></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer2} onPress={this.Mainmenu}>
                        <Text style={styles.buttonText}>(X)  Cancel</Text>
                    </TouchableOpacity>
            </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#3498db',

    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        marginTop: 20,
        marginBottom: 20,
        width: 200,
        height: 200,
    },
    pic: {
        width: 350,
        height: 60,
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor:'#2980b9',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 7,
    },
    buttonContainer2: {
        alignItems: 'center',
        backgroundColor:'#2980b9',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 70,
    },
    title: {
        color: '#fff',
        marginTop: 10,
        width: 300,
        textAlign:'center',
        opacity: 0.9,
    },
    input: {
        height: 200,
        width: 350,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom: 20,
        marginTop: 10,
        color:'#fff',
        paddingHorizontal: 10,
        
    },
    input2: {
        height: 50,
        width: 350,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom: 20,
        marginTop: 10,
        color:'#fff',
        paddingHorizontal: 10,
    },

    topTitle: {
        fontSize: 20,
        marginBottom: 10,
    }
  });