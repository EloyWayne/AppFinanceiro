// src/pages/Usuario/index.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Usuario() {
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
        <Text style={styles.title}>Usuário</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.value}>Jorge Luiz</Text>

        <Text style={styles.label}>CPF</Text>
        <Text style={styles.value}>000.000.000-00</Text>

        <Text style={styles.label}>Número de Celular</Text>
        <Text style={styles.value}>(00) 00000-0000</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>jorge.luiz@example.com</Text>
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
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFE0',
    marginBottom: 8,
  },
  value: {
    fontSize: 18,
    color: '#F0E68C',
    marginBottom: 16,
  }
});
