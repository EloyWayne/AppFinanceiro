// src/pages/Noticias/index.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Noticias() {
  const navigation = useNavigation();

  const handleVoltar = () => {
    navigation.goBack();
  };

  const noticias = [
    {
      id: 1,
      title: 'Ações da XYZ disparam após anúncio de fusão',
      content: 'As ações da XYZ Corp subiram 30% após o anúncio de fusão com a ABC Inc. Analistas esperam grandes mudanças no mercado.',
    },
    {
      id: 2,
      title: 'Mercado reage negativamente a dados econômicos',
      content: 'O mercado de ações fechou em queda após a divulgação de novos dados econômicos mostrando uma desaceleração na economia.',
    },
    {
      id: 3,
      title: 'Startup de tecnologia promete revolucionar o setor financeiro',
      content: 'A nova startup FinTech está atraindo investidores com sua promessa de revolucionar o setor financeiro com tecnologia blockchain.',
    },
    // Adicione mais notícias aqui
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleVoltar}>
          <AntDesign name="arrowleft" size={24} color="#FFFFE0" />
        </TouchableOpacity>
        <Text style={styles.title}>Notícias da Bolsa</Text>
      </View>

      <ScrollView style={styles.content}>
        {noticias.map((noticia) => (
          <View key={noticia.id} style={styles.noticia}>
            <Text style={styles.noticiaTitle}>{noticia.title}</Text>
            <Text style={styles.noticiaContent}>{noticia.content}</Text>
          </View>
        ))}
      </ScrollView>
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
  noticia: {
    marginBottom: 20,
  },
  noticiaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F0E68C',
    marginBottom: 8,
  },
  noticiaContent: {
    fontSize: 16,
    color: '#FFFFE0',
  },
});
