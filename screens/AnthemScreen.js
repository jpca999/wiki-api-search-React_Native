import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

AnthemScreen = () => {
  return (
      <View style={styles.container}>
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
        <Text style={styles.anthem}> Search Screen </Text>
       </TouchableOpacity>


       <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
        <Text style={styles.anthem}> Anthem </Text>
       </TouchableOpacity>


      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  anthem:{
    fontSize: 300,
    backgroundColor:'blue',
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default AnthemScreen; 