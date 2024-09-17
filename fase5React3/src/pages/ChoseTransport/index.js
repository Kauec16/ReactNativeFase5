import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { useNavigation } from '@react-navigation/native';

export default function ChoseTransport() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Way', {path:1})}>
                <Image
                    source={require('../../assets/aviao.png')}
                    style={{ width: '35%', height: "35%" }}
                    resizeMode="contain"
                />
                <Text style={styles.cardText}>Aviao</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Way', {path:2})}>
                <Image
                    source={require('../../assets/taxi.png')}
                    style={{ width: '35%', height: "35%" }}
                    resizeMode="contain"
                />
                <Text style={styles.cardText}>Taxi</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Way', {path:3})}>
                <Image
                    source={require('../../assets/onibus.png')}
                    style={{ width: '35%', height: "35%" }}
                    resizeMode="contain"
                />
                <Text style={styles.cardText}>Onibus</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Way', {path:4})}>
                <Image
                    source={require('../../assets/Trem.png')}
                    style={{ width: '35%', height: "35%" }}
                    resizeMode="contain"
                />
                <Text style={styles.cardText}>Trem</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    card: {
        width: '49%',
        height: '49%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        borderWidth: 1,
        borderColor: '#ddd',
        margin: 2,
    },
    cardText: {
        fontSize: 18,
        color: '#333',
    }
})