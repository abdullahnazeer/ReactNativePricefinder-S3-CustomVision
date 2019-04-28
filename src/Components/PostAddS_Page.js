import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';



export default class PostAddS_Page extends React.Component {

    PostAddT_Page() {
        Actions.PostAddT_Page();
    }

    PostAddF_Page() {
        Actions.PostAddF_Page();
    }
    render( ){
        
        return(
            <ImageBackground source={require('../assets/bgnext.png')}
            style={{resizeMode: 'stretch', height:'100%', width:'100%'}}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                
                <View style={styles.logoContainer}>
                <Text style={styles.title1}>Write your Description</Text>
                <Text style={styles.instructions}>Step 2:</Text>
                <Text style={styles.title}>Please provide a small description below </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Advertisement description here.."
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
                        source={require('../assets/p2.png')}
                    />
                    
                </View>
                <View style={styles.buttonAlignment}>

                        <TouchableOpacity
                            style={styles.buttonContainer2}
                            onPress={this.PostAddF_Page}>
                            <Image style={styles.smallbtns}
                                source={require('../assets/previousbtn.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonContainer1}
                            onPress={this.PostAddT_Page}>
                            <Image style={styles.smallbtns}
                                source={require('../assets/nextbtn.png')} />
                        </TouchableOpacity>
                    </View>
            </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 5,
        alignItems: 'center',

    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    smallbtns: {
        width: 40,
        height: 40,
        //margin: 20,
    },
    logo: {
        marginTop: 20,
        marginBottom: 20,
        width: 200,
        height: 200,
    },
    buttonAlignment: {
        // flex:1,
        flexDirection: 'row',
    },
    instructions: {
        fontSize: 15,
        color: '#9aa6ba',
        marginTop: 10,
        textAlign: 'left',
    },
    pic: {
        width: 350,
        height: 60,
    },
    buttonContainer1: {
        marginTop: 10,
        marginLeft: 70,
        marginBottom: 20,
    },
    buttonContainer2: {
        marginTop: 10,
        marginBottom: 20,
        marginRight: 70,
    },
    title: {
        color: '#fff',
        marginTop: 10,
        width: 300,
        textAlign:'center',
        opacity: 0.9,
    },
    title1: {
        fontSize: 25,
        color: '#fff',
        marginTop: 15,
        width: 300,
        textAlign: 'center',
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