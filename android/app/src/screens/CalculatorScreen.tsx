import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CalculatorScreen = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const sum = Number(value1) + Number(value2);
    setResult(sum);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>

      <TextInput
        placeholder="Enter first number"
        value={value1}
        onChangeText={setValue1}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="Enter second number"
        value={value2}
        onChangeText={setValue2}
        keyboardType="numeric"
        style={styles.input}
      />

      <Button title="Add" onPress={calculate} />

      {result !== null && (
        <Text style={styles.result}>Result: {result}</Text>
      )}
    </View>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  result: { marginTop: 20, fontSize: 18 },
});
