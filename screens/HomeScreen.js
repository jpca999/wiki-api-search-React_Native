import React, { Component } from 'react';
import { Button, StyleSheet, View, Linking } from 'react-native';

export default class HomeScreen extends Component {
  constructor (props) {
    super(props);
    // console.log(' props = ', props); 
  }  
  

  _onPressButton() {
    console.log ( '13   _onPressButton'); 

   this.props.navigation.navigate('SearchScreen')
  }

  _goToAnthemSite() {
    alert('You tapped the _goToAnthemSite!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={ () => { this.props.navigation.navigate('SearchScreen')   } }
            title="Search Screen"
          />
        </View>

        <View style={styles.buttonContainer}>
        <Button title="visit  Anthem Website" onPress={ ()=>{ Linking.openURL('https://Anthem.com')}}  color="#841584"/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
