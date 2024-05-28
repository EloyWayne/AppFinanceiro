// src/pages/Tristezas/index.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const despesas = [
  {
    id: 1,
    label: 'Escola Hilson',
    value: '485,94',
    date: '05/04/2024'
  },
  {
    id: 2,
    label: 'Escola Evandro',
    value: '300,94',
    date: '14/04/2024'
  },
  {
    id: 3,
    label: 'Escola Joselito',
    value: '1996,94',
    date: '20/04/2024'
  }
];

export default function Tristezas() {
  const navigation = useNavigation();

  const handleVoltar = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleVoltar}>
          <AntDesign name="arrowleft" size={24} color="#FFFFE0" />
        </TouchableOpacity>
        <Text style={styles.title}>Tristezas</Text>
      </View>

      <View style={styles.content}>
        {despesas.map((despesa) => (
          <View key={despesa.id} style={styles.despesa}>
            <Text style={styles.label}>{despesa.label}</Text>
            <Text style={styles.value}>R$ {despesa.value}</Text>
            <Text style={styles.date}>{despesa.date}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFE0',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  despesa: {
    backgroundColor: '#2E2E2E',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFE0',
  },
  value: {
    fontSize: 18,
    color: '#FF6347',
    marginTop: 8,
  },
  date: {
    fontSize: 14,
    color: '#FAFAD2',
    marginTop: 4,
  },
});
