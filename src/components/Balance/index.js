import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Balance({ saldo, gastos }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Felicidade</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>{saldo}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Tristeza</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.exspenses}>{gastos}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#363636',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F0E68C',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencySymbol: {
    color : '#F0E68C',
    marginRight: 6,
    fontSize: 18,
  },
  balance: {
    fontSize: 22,
    color : '#FFD700',
  },
  exspenses: {
    fontSize: 22,
    color : '#FF8C00',
  },
});
