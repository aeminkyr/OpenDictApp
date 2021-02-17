import React from "react";
import { StyleSheet, Text, View, StatusBar, Button } from "react-native";


export default class Profile extends React.Component {

    render() {
        return (
          <View style={styles.container}>
            <Text></Text>
            <Button title="Ayar" />
          </View>
        );
      }
    

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
  });