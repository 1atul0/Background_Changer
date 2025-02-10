import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  function generateColor() {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      const index = Math.round(Math.random() * 15);
      color += hexRange[index];
    }
    setBackgroundColor(color);
  }
  return (
    <>
      <StatusBar backgroundColor={backgroundColor} />
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.btnText}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtn: {
    backgroundColor: '#D63031',
    padding: 10,
    borderRadius: 6,
    borderColor: 'yellow',
    borderWidth: 1,
  },
  btnText: {
    fontSize: 14,
    color: Colors.lighter,
    fontWeight: 'bold',
  },
});
