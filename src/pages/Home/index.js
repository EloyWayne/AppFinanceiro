import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Escola Hilson ',
    value: '485,94',
    date: '05/04/2024',
    type: 0 // despesa
  },
  {
    id: 2,
    label: 'Escola Evandro ',
    value: '300,94',
    date: '14/04/2024',
    type: 0 // despesa
  },
  {
    id: 3,
    label: 'Escola Joselito',
    value: '1996,94',
    date: '20/04/2024',
    type: 0 // despesa
  },
  {
    id: 4,
    label: 'Pagamento Do Tigrinho',
    value: '7999,94',
    date: '01/04/2024',
    type: 1 // ganho
  },
  {
    id: 5,
    label: 'Ganho Betano',
    value: '17.000,94',
    date: '27/04/2024',
    type: 1 // ganho  
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Jorge Luiz"/>

      <Balance saldo="30.009,96" gastos="- 996,96"/> 

      <Actions/>

      <Text style={styles.title}>Últimas Facadas</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id) }
        shwosVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Movements data={item} />}
      />
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  title:{
    fontSize:18,
    fontWeight: 'bold',
    color: "#F0E68C",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});