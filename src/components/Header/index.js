import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import { Feather } from '@expo/vector-icons'


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.username}>{name}</Text>

              <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                <Feather name="user" size={27} color="#fff"/>
              </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({  
    container:{
        backgroundColor: '#1C1C1C',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingBottom: 44,
    },
    content:{
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    username: {
      color: '#FFFF00',
      fontSize: 18,
      fontWeight: 'bold'
    },
    buttonUser: {
      windth: 44,
      height: 44,
      backgroundColor: 'rgba(255,215,0, 0.7)',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 44 / 2,
    }
})
