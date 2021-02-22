import React from "react";
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { Icon } from 'react-native-elements';
import Flow from "./BottomTabs/Flow";
import Profile from "../screens/BottomTabs/Profile";

const MainTabs = createMaterialBottomTabNavigator({
  Flow: {
    screen: Flow,
    navigationOptions: {
      tabBarLabel: 'Akış',
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profil'
    },
  },
  

},
{
  animationEnabled: true,

  initialRouteName: 'Flow',
  activeColor: '#f0edf6',
  inactiveColor: 'black',
  barStyle: { backgroundColor: '#00716f' },
  tabBarOptions: {
    activeBackgroundColor: '#fff',
    inactiveBackgroundColor: '#fff',
    activeTintColor: '#405BDB',
    inactiveTintColor: '#9B9B9B',
  },
  defaultNavigationOptions:({navigation}) => ({
    tabBarIcon: ({ tintColor }) => {
      let { routeName } = navigation.state;
      let iconName;
      if(routeName==="Flow") {
           iconName = 'eye'
      } else if(routeName =="Profile"){
           iconName = 'user'

      }
      return (<Icon
name={iconName}
type='evilicon'
color={tintColor}
/>)
    }
  })
}
);

export default createAppContainer(MainTabs);


