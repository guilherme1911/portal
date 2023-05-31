import react, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Modal,ScrollView} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';



export default function IPVA () {
const  navigation = useNavigation();
const voltarPagina = () => {
    navigation.goBack();
  };
  return ( 

    <ScrollView>

    <View style={styles.container}>
          <View style={styles.content}>

          </View>
         </View>
         <Text style={styles.titulo}>Portal da transparência</Text>  
         <Text style={styles.subtitulo}>Sergipe</Text> 

         <View style={styles.subtitulo2}>
         <Text style={styles.subtitulo2txt}>
          Tranferências Aos Municípios - IPVA
          </Text>
          </View>

         <TouchableOpacity style = {styles.btback} onPress={voltarPagina}>
         <AntDesign name="leftcircleo" size={50} color="white" />
         </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('PdfIPVA2022')} style={styles.btano}>
    <Text style={styles.btanotxt}>
     2022
    </Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('PdfIPVA2021')} style={styles.btano}>
    <Text style={styles.btanotxt}>
     2021
    </Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('PdfIPVA2020')} style={styles.btano}>
    <Text style={styles.btanotxt} >
     2020
    </Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('PdfIPVA2019')} style={styles.btano}>
    <Text style={styles.btanotxt}>
     2019
    </Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('PdfIPVA2018')} style={styles.btano}>
    <Text style={styles.btanotxt}>
     2018
    </Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('PdfIPVA2017')} style={styles.btano}>
    <Text style={styles.btanotxt}>
     2017
    </Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('PdfIPVA2016')} style={styles.btano}>
    <Text style={styles.btanotxt}>
     2016
    </Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('PdfIPVA2015')} style={styles.btano}>
    <Text style={styles.btanotxt}>
     2015
    </Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('PdfIPVA2014')} style={styles.btano}>
    <Text style={styles.btanotxt}>
     2014
    </Text>
  </TouchableOpacity>


  </ScrollView>

   );
}
const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#fff',
    },
    content:{
        borderBottomLeftRadius:30,
        paddingTop: 150,
        paddingBottom: 80,
        fontSize: 30,
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#23238E',
        shadowRadius: 11166
      }, 
      titulo:{
        fontSize: 30,
        color: 'white',
        marginRight: 90,
        marginLeft: 20,
        marginTop: -150,
        left: 5,
        textAlign: 'left',
        fontWeight: 'bold'
      },
      subtitulo:{
        fontSize: 24,
        color: 'white',
        marginRight: 90,
        marginLeft: 20,
        marginTop: 5,
        left: 5,
        height: 60,
        textAlign: 'left'
      },
      subtitulo2:{  
        left: 10,
        marginTop: 15,
        backgroundColor: 'black',
        height: 40,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        marginRight: 5,
        marginTop: 15
      },
  
      subtitulo2txt:{
        color:'white',
        textAlign: 'center',
        marginTop: 8,
        fontSize: 18,
        fontWeight: 'bold'
      },
      btano:{
        
        marginTop: 25,
        backgroundColor: 'red',
        marginLeft: 77,
        marginRight: 77,
        height: 50,  
        padding: 13,
        borderRadius: 12
      },
      btback:{
        position: 'absolute',
        width: 60,
        height: 60,
        marginTop:90,
        alignItems: 'center',
        marginRight: 2,
        justifyContent: 'center',
        borderRadius: 60,
        backgroundColor: 'transparent',
        right: 5,
      },
      btanotxt:{
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
      }

});
