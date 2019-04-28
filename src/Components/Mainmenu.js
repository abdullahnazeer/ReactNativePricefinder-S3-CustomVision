import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity,  ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Mainmenu extends React.Component {

    PostAddF_Page() {
        Actions.PostAddF_Page();
    }
    PostAddS_Page() {
        //Actions.PostAddS_Page();
    }
    PostAddT_Page() {
        //Actions.PostAddT_Page();
    }
    render() {

        return (
            <ImageBackground source={require('../assets/bggg.jpg')}
            style={{resizeMode: 'stretch', height:'100%', width:'100%'}}>
                <View style={styles.container}>
                        <Image
                            style={styles.logoPic}
                            source={require('../assets/PFLogo.png')}
                        />

                    <TouchableOpacity style={styles.buttonContainer} onPress={this.PostAddF_Page}>
                        <Image
                            style={styles.btnpic1}
                            source={require('../assets/promotion2.png')}
                        />
                        <Text style={styles.buttonText}>Upload Advertisement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.PostAddS_Page}>
                        <Image
                            style={styles.btnpic1}
                            source={require('../assets/search2.png')}
                        />
                        <Text style={styles.buttonText}>Search Products</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.PostAddT_Page}>
                    <Image
                            style={styles.btnpic1}
                            source={require('../assets/trending.png')}
                        />
                        <Text style={styles.buttonText}>View Trending Products</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        //flexGrow: 1,
        //justifyContent: 'center',
    },
    btnpic1: {
        alignSelf: 'center',
        width: 60,
        height: 60,
        marginBottom: 5,
    },
    logoPic: {
        alignSelf: 'center',
        width: '100%',
        height: '15%',
        marginBottom: 30,
        marginTop: 20,
    },
    buttonContainer: {
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 50,
        color: '#fff',
        marginBottom:40,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title: {
        color: '#fff',
        marginTop: 10,
        width: 300,
        textAlign: 'center',
        opacity: 0.9,
    },
    topTitle: {
        fontSize: 40,
        marginBottom: 20,
        color: '#fff',
    },
    buttonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: '700',
    }
});