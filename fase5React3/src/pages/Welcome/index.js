import React from "react";
import { View, Text, StyleSheet, Touchable, Image } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { useNavigation } from '@react-navigation/native';

export default function Welcome(){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <View style={styles.container2}>
            </View>

            <View style={styles.containerForm}>
                <View style={styles.imageContainer}>
                    <Image
                    source={require('../../assets/pin.png')}
                    style={{width:'100%', height:"100%"}}
                    resizeMode = "contain"
                    />
                </View>

                <Text style={styles.tittle}>Planeje seu trajeto</Text>
                <Text style={styles.text}>Descubra a forma mais eficiente e prática de se locomover pela cidade com nosso aplicativo. O MobCidade integra todos os meios de transporte em um só lugar, desde metrôs e ônibus até táxis e serviços de carona.</Text>
                <TouchableOpacity 
                onPress={()=>{navigation.navigate('ChoseTransport')}}
                style={styles.button}
                >
                    <Text>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonText}><Text>Criar conta </Text></TouchableOpacity>
            </View>

            <View style={styles.container2}>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#B2D8B2'
    },
    container2:{
        flex:1,
        backgroundColor: '#B2D8B2'
    },
    text:{
        marginVertical:5
    },
    containerForm:{
        flex:2,
        backgroundColor: '#FFF',
        borderRadius: 25,
        paddingStart:'5%',
        paddingEnd:'5%',
        justifyContent:'center',
        alignItems:'center'
    },
    imageContainer:{
        width: '30%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
      },
    tittle:{
        fontSize:24,
        fontWeight:'bold',
        margin:28
    },
    button:{
        position:'static',
        backgroundColor:'#B2D8B2',
        width:'60%',
        alignSelf:'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:8,
        margin:5
    },
    buttonText:{
        color: '#0000FF',
        position:'center',
        backgroundColor:'#fff',
        fontSize: 18,
        fontWeight:'bold'
    }
})