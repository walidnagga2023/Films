import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.main_container}>
      <Text>Try editing me! 🎉</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  main_container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
})
export default App;