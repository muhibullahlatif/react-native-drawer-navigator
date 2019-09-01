import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native';
import Button from 'react-native-button';

export default class HeaderComponent extends Component {
  render(){
    return(
      <View
      style={{
        height: 90,
        justifyContent: 'flex-start',
        flexDirection: 'row',
      }}>
      <TouchableOpacity
      style={{
        marginLeft: 15,
        marginTop: 40,
      }}
      onPress={() => {
        const { navigate } = this.props.navigation.toggleDrawer()
      }}>
      <Image
      style={{width: 32, height: 32}}
      source={require('../icons/menu_ico.png')}
      />
      </TouchableOpacity>

      <Text style={{
      textAlign: 'center',
      fontSize: 25,
      }}>App Menu</Text>

      </View>
    );
  }
}
