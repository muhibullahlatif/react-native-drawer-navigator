import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Home } from '../screenNames';
import HeaderComponent from './HeaderComponent';

const backgroundColor = "#e97600";
export default class SettingsComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    let drawerLabel = 'Settings';
    let drawerIcon = () => (
      <Image
      source={require('../icons/setting_ico.png')}
      style={{width: 26, height: 26, tintColor: backgroundColor}}
      />
    );
    return {drawerLabel, drawerIcon };
  }
  render() {
    return(<View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <HeaderComponent {... this.props}></HeaderComponent>
      <View
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
      This is Settings Screen
      </Text>
      <TouchableHighlight style={{
        margin: 20,
        width: 200,
        height: 45,
        backgroundColor: 'green',
        padding: 10,
        alignItems: 'center',
      }}
      onPress={() => {
        const { navigate } = this.props.navigation;
        navigate(Home);
      }}>
      <Text style={{color: 'white', fontSize: 18}}>Back To Home</Text>
      </TouchableHighlight>
      </View>

      </View>);
  }
}
