import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeComponent from './components/HomeComponent';
import InfoComponent from './components/InfoComponent';
import SettingsComponent from './components/SettingsComponent';
import CloudComponent from './components/CloudComponent';


import { Home, Info, Settings, Cloud } from './screenNames';


var { height, width } = Dimensions.get('window');

let routeConfigs = {
  Home: {
    path: '/home',
    screen: HomeComponent,
  },
 Info: {
   path: '/info',
   screen: InfoComponent,
 },
Settings: {
  screen: SettingsComponent,
},
Cloud: {
  screen: CloudComponent,
},
};

let drawerNavigatorConfig = {
  initialRouteName: Home,
  drawerWidth: width / 2,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  //drawerBackgroundColor: 'orange',
  contentOptions: {
    activeTintColor: '#666',
  }
};

const createNav = createDrawerNavigator(routeConfigs, drawerNavigatorConfig);
const App = createAppContainer(createNav);
export default App;

// import Firstscreen from './screens/Firstscreen';
// import Secondscreen from './screens/Secondscreen';
//
//
// const DrawerExample = createDrawerNavigator(
//   {
//     First: {
//       path: '/',
//       screen: 'Firstscreen',
//     },
//     Second: {
//       path:'/sent',
//       screen: 'Secondscreen',
//     },
//
//   },
//   {
//     initialRouteName: 'First',
//     drawerPosition: 'left'
//   }
// );
//
// const MyApp = createAppContainer(DrawerExample);
// export default MyApp;
