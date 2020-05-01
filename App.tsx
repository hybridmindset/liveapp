// components/App.tsx
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const App: React.FC<Props> = (props) => {
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.web.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload
          </Text>
        </View>
      );
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: '100%'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;