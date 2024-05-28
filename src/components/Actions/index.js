// src/components/Actions/index.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Actions() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('Felicidades')}
      >
        <View style={styles.areaButton}>
          <AntDesign name="addfolder" size={26} color="#FAFAD2" />
        </View>
        <Text style={[styles.labelButton, { color: '#F0E68C' }]}>Felicidades</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('Tristezas')}
      >
        <View style={styles.areaButton}>
          <AntDesign name="delete" size={26} color="#FAFAD2" />
        </View>
        <Text style={[styles.labelButton, { color: '#F0E68C' }]}>Tristezas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('Usuario')}
      >
        <View style={styles.areaButton}>
          <AntDesign name="user" size={26} color="#FAFAD2" />
        </View>
        <Text style={[styles.labelButton, { color: '#F0E68C' }]}>Usuário</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('Noticias')}
      >
        <View style={styles.areaButton}>
          <AntDesign name="linechart" size={26} color="#FAFAD2" />
        </View>
        <Text style={[styles.labelButton, { color: '#F0E68C' }]}>Notícias</Text>
      </TouchableOpacity>

      {/* Outros botões aqui */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
  },
  actionButton: {
    alignItems: 'center',
    marginRight: 32,
  },
  areaButton: {
    backgroundColor: '#F0E68C',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelButton: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
