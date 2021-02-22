import React from "react";
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import Home from '../UpTabs/Home';
import Latest from '../UpTabs/Latest';



const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        initialRouteName: 'Home',
        activeColor: '#C71585',
        inactiveColor: '#226557',
        barStyle: {backgroundColor: '#FFC0CB'},
      },
    },
    Latest: {
      screen: Latest,
      navigationOptions: {
        tabBarLabel: 'Latest',
        activeColor: '#C71585',
        inactiveColor: '#226557',
        barStyle: {backgroundColor: '#FFC0CB'},
      },
    }
    
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      pressColor: 'black',
      style: {
        backgroundColor: 'white',
      },
      indicatorStyle: {
        backgroundColor: 'black',
      },
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      showLabel: true,
      showIcon: true,
    },
  },
);

export default createAppContainer(TabNavigator);


/*


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
  */