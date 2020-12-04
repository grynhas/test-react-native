/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const App = () => {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  const handleAdd = () => {
    setNames([...names, name]);
    setName('');
  };

  const handleRenderTask = ({item}) => <Text style={styles.item}>{item}</Text>;

  return (
    <View style={styles.container}>
      <TextInput
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TouchableWithoutFeedback onPress={handleAdd}>
        <Text testID="Add">Add</Text>
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        <FlatList
          testID="list"
          data={names}
          keyExtractor={(item) => item}
          renderItem={handleRenderTask}
        />
      </View>
    </View>
  );
};

export default App;
