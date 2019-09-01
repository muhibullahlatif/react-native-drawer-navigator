import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Home } from '../screenNames';
import HeaderComponent from './HeaderComponent';

const backgroundColor = "#964f8e";
export default class CloudComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    let drawerLabel = 'Cloud';
    let drawerIcon = () => (
      <Image
      source={require('../icons/cloud_ico.png')}
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
      This is Cloud Screen
      </Text>
      <TouchableHighlight style={{
        margin: 20,
        width: 200,
        height: 45,
        backgroundColor: 'blue',
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
