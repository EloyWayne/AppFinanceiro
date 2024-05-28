// src/pages/Felicidades/index.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ganhos = [
  {
    id: 1,
    label: 'Pagamento Do Tigrinho',
    value: '7999,94',
    date: '01/04/2024'
  },
  {
    id: 2,
    label: 'Ganho Betano',
    value: '17.000,94',
    date: '27/04/2024'
  }
];

export default function Felicidades() {
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
        <Text style={styles.title}>Felicidades</Text>
      </View>

      <View style={styles.content}>
        {ganhos.map((ganho) => (
          <View key={ganho.id} style={styles.ganho}>
            <Text style={styles.label}>{ganho.label}</Text>
            <Text style={styles.value}>R$ {ganho.value}</Text>
            <Text style={styles.date}>{ganho.date}</Text>
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
  ganho: {
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
    color: '#ADFF2F',
    marginTop: 8,
  },
  date: {
    fontSize: 14,
    color: '#FAFAD2',
    marginTop: 4,
  },
});
