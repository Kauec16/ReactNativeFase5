import React from "react";
import { View, Text, StyleSheet, Touchable, Image } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Way() {
    const navigation = useNavigation()
    const route = useRoute();
    const { path } = route.params;
    const images = {
        1: require('../../assets/aviao.png'),
        2: require('../../assets/taxi.png'),
        3: require('../../assets/onibus.png'),
        4: require('../../assets/Trem.png'),
      };
    return (
        <View style={{width:'100%', height:"100%"}}>
            <View style={styles.map}>
                <Image
                    source={require('../../assets/mapa.png')}
                    style={{width:'100%', height:"100%"}}
                    resizeMode = "cover"
                ></Image>
            </View>

            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.title}>Trajeto 1</Text>
                    <Text style={styles.title}>Preço: 50,90RS</Text>
                    <Image
                    source={images[path]}
                    style={{width:'60%', height:"60%"}}
                    resizeMode = "contain"
                    />
                </View>
                <View style={styles.card}>
                <Text style={styles.title}>Trajeto 1</Text>
                    <Text style={styles.title}>Preço: 37,90RS</Text>
                    <Image
                    source={images[path]}
                    style={{width:'60%', height:"60%"}}
                    resizeMode = "contain"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    container: {
        borderRadius:25,
        flex: 1,
        backgroundColor: '#B2D8B2',
        justifyContent:"center"
    },
    card:{
        borderRadius:25,
        flex: 1,
        backgroundColor: '#FFF',
        margin: 25,
        padding:25,
        width:'90%',
        borderWidth: 2,         
        borderColor: '#007bff',
        borderRadius: 10,       
        backgroundColor: '#f0f0f0',
        justifyContent:"space-between",
        flexDirection: 'row',
        alignItems: 'center',
        display:"flex"
    },
    title: {
        fontSize: 24, // Tamanho do texto do título
        fontWeight: 'bold', // Peso da fonte
        color: '#333', // Cor do texto
        textAlign: 'center', // Alinha o texto no centro
        marginVertical: 10, // Margem vertical
      },
})