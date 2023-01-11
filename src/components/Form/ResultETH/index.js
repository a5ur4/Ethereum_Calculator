import React from "react";
import { View, Text, Share, TouchableOpacity} from "react-native";
import styles from "./style";

export default function ResultETH(props){

    const onShare = async () => {
        const result = await Share.share({
            message:"Valor Final: " +props.ResultETH, 
        })
    }

    return(
        <View>
            <View>
            <Text style={styles.MessageETH}>
                {props.messageResultETH} {props.ResultETH}
            </Text>
                <TouchableOpacity 
                onPress={onShare}
                style={styles.ShareButton}
                >
                <Text>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}