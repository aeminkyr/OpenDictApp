import React from "react";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { Icon } from 'react-native-elements';
import Ev from "../screens/Tabs/Ev";
import Profile from "../screens/Tabs/Profile";



/*
export default createMaterialBottomTabNavigator(
  {
    Feed: { screen: Ev },
    Settings: { screen: Settings },
   
  },
  {
    initialRouteName: 'Feed',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  }
);

*/




const MainTabs = createMaterialBottomTabNavigator({
  Feed: {
    screen: Ev,
    navigationOptions: {
      tabBarLabel: 'Akış',
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profil',
    },
  },

},
{
  
  initialRouteName: 'Feed',
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
      if(routeName==="Feed") {
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


