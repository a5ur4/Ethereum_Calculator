import React, {useState} from "react";
import { Pressable, StyleSheet, Text, Vibration, View, Keyboard, TextInput, TouchableOpacity, FlatList } from 'react-native';
import ResultETH from "./ResultETH";
import styles from './style'

export default function Form() {

const [reais, setReais] = useState(null)
const [ETH, setETH] = useState(0.00015)
const [messageETH, setMessageETH]= useState(null)
const [finalValue, setfinalValue] = useState(null)
const [ETHList, setETHList] = useState([])
const [errorMessage, setErrorMesssage] = useState(null)
const [TextButton, setTextButton]= useState("Calcular")

function ETHCalculator(){
    let value = reais * ETH
    setETHList ((arr) => [...arr, {id: new Date().getTime(), ETH:value}])
    setfinalValue(value)
}

function verificationETH(){
    if (reais == null) {
        Vibration.vibrate()
        setErrorMesssage("Este campo é obrigatório*")
    }
}

function reset(){
    console.log(setETHList)
    if(reais != null){
        ETHCalculator()
        setReais(null)
        setMessageETH("ETH =")
        setTextButton("Calcular Novamente")
        setErrorMesssage(null)
    } else {
        setfinalValue(null)
        verificationETH()
        setTextButton("Calcular")
        setMessageETH("Preecha os valores requisitados")
    }
}

    return (
        <View style={styles.FormBox}>
        <Pressable onPress={Keyboard.dismiss}>
            <View style={styles.Form}>
                <Text style={styles.FormText}>Digite o valor em que deseja converter: </Text>
                <Text style={styles.FormTextError}>{errorMessage}</Text>
                <TextInput
                onChangeText={setReais}
                value={reais}
                placeholder="Exemplo: 10.50"
                keyboardType="numeric"
                style={styles.FormInput}
                />

                <TouchableOpacity
                onPress={() =>{
                    reset()
                }}
                style={styles.FormButton}
                >
                    <Text style={styles.FormButtonText}>{TextButton}</Text>
                </TouchableOpacity>
            <ResultETH messageResultETH={messageETH} ResultETH={finalValue}/>
            </View>
            
            </Pressable>
                <FlatList
                style={styles.ListETH}
                showsVerticalScrollIndicator={false}
                data={ETHList.reverse()}
                renderItem={({item}) =>{
                    return(
                        <Text>
                            <Text>Valor Final ETH = {item.ETH}</Text>
                        </Text>
                    )
                }}
                keyExtractor={(item) =>{
                    item.id
                }}
                />
        </View>
    )

}

// https://colorhunt.co/palette/00abb33c4048b2b2b2eaeaea ->