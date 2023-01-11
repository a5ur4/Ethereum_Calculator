import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

export default function Title(){
    return(
        <View style={styles.TitleBox}>
            <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png'}} 
            style={styles.ImageETH}
            />
            <Text style={styles.TitleText}>Ethereum Calculator</Text>
            <View style={styles.LineText_1}/>
            <View style={styles.LineText_2}/>
        </View>
    );
}