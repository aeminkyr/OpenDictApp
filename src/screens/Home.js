import React from "react";
import { StyleSheet, Text, View, Image, TextInput ,StatusBar } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";


export default class Register extends React.Component {

    render(){
        return(
            <View style={styles.container} >
                <Text>Eee giriş yaptın ne oldu?</Text>
            </View >

        )
    }

}

const styles = StyleSheet.create({

    container:{
        flex:1,
        marginTop:StatusBar.currentHeight
    }

    

});
