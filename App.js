import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 60 }}>
      <View>
        <TextInput
          placeholder="Set Your Goal"
          style={{
            borderBottomColor: 'black',
            borderWidth: 3,
            padding: 10,
            borderRadius: 5
          }}
        />
        <Button title="Add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
