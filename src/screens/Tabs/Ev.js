import React from "react";
import { StyleSheet, Text, View, StatusBar, Button } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Ev extends React.Component {
    state = {
      token: "",
    };
  
    logout = () => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Login" })],
      });
      this.props.navigation.dispatch(resetAction);
    };
  
    componentDidMount() {
      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem("@token");
          if (value !== null) {
            // value previously stored
            this.setState({ token: value });
            console.log(value);
          }
        } catch (e) {
          // error reading value
        }
      };
  
      getData();
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Text>Eee giriş yaptın ne oldu? {this.state.token}</Text>
          <Button title="Log out" onPress={this.logout} />
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