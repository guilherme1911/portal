import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import { Linking } from 'react-native';


export default function PdfIPI2016 (){

  const abrirSite1 = () => {
    Linking.openURL('http://arquivos.setc.se.gov.br/IPI/2016/01_IPI_Janeiro_2016.pdf'); 
  };
  const abrirSite3 = () => {
    Linking.openURL('http://arquivos.setc.se.gov.br/IPI/2016/03_IPI_Marco_2016.pdf'); 
  };
  const abrirSite4 = () => {
    Linking.openURL('http://arquivos.setc.se.gov.br/IPI/2016/04_IPI_Abril_2016.pdf'); 
  };
  const abrirSite5 = () => {
    Linking.openURL('http://arquivos.setc.se.gov.br/IPI/2016/05_IPI_Maio_2016.pdf'); 
  };
  const abrirSite6 = () => {
    Linking.openURL('http://arquivos.setc.se.gov.br/IPI/2016/06_IPI_Junho_2016.pdf'); 
  };
  const abrirSite7 = () => {
    Linking.openURL('http://arquivos.setc.se.gov.br/IPI/2016/07_IPI_Julho_2016.pdf'); 
  };
  const abrirSite8 = () => {
    Linking.openURL('http://arquivos.setc.se.gov.br/IPI/2016/08_IPI_Agosto_2016.pdf'); 
  };
  const abrirSite9 = () => {
    Linking.openURL('http://arquivos.setc.se.gov.br/IPI/2016/09_IPI_Setembro_2016.pdf'); 
  };
  const abrirSite10 = () => {
    Linking.openURL('http://arquivos.setc.se.gov.br/IPI/2016/10_IPI_Outubro_2016.pdf'); 
  };
  const abrirSite11 = () => {
    Linking.openURL('http://arquivos.setc.se.gov.br/IPI/2016/11_IPI_Novembro_2016.pdf'); 
  };
  const abrirSite12 = () => {
    Linking.openURL('http://arquivos.setc.se.gov.br/IPI/2016/12_IPI_Dezembro_2016.pdf'); 
  };

  const navigation = useNavigation();
  const voltarPagina = () => {
    navigation.goBack();
  };
    
    return (

      <ScrollView>
        <View style={styles.container}> 
        <View style={styles.content}>
              <StatusBar style="light" />
       </View>
      </View> 

      <Text style={styles.titulo}>Portal da transparência</Text>  
         <Text style={styles.subtitulo}>Sergipe</Text> 

      <View style={styles.subtitulo2}>
        <Text style={styles.subtitulo2txt}>
        Transferência aos Municípios - IPI - 2016
        </Text>
      </View>

      <TouchableOpacity style = {styles.btbackhome} onPress={() => navigation.navigate('Home')}>
         <Entypo name="home" size={50} color="white" />
         </TouchableOpacity>

         <TouchableOpacity style = {styles.btback} onPress={voltarPagina}>
         <AntDesign name="leftcircleo" size={50} color="white" />
         </TouchableOpacity>

      
         <View>
        <TouchableOpacity onPress={abrirSite1} style={styles.btpdf1} >
          <Text style={styles.mestxt}>
            Janeiro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={abrirSite3} style={styles.btpdf}>
          <Text style={styles.mestxt}>
            Março
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={abrirSite4} style={styles.btpdf}>
          <Text style={styles.mestxt}>
            Abril
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={abrirSite5} style={styles.btpdf}>
          <Text style={styles.mestxt}>
            Maio
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={abrirSite6} style={styles.btpdf}>
          <Text style={styles.mestxt}>
            Junho
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={abrirSite7} style={styles.btpdf}>
          <Text style={styles.mestxt}>
            Julho
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={abrirSite8} style={styles.btpdf}>
          <Text style={styles.mestxt}>
            Agosto
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={abrirSite9} style={styles.btpdf}>
          <Text style={styles.mestxt}>
            Setembro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={abrirSite10}  style={styles.btpdf}>
          <Text style={styles.mestxt}>
            Outubro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={abrirSite11}  style={styles.btpdf}>
          <Text style={styles.mestxt}>
            Novembro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={abrirSite12}  style={styles.btpdf}>
          <Text style={styles.mestxt}>
            Dezembro
          </Text>
        </TouchableOpacity>

      </View>
      </ScrollView>

     
    );
  };
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
        fontSize: 15,
        fontWeight: 'bold'
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
      btbackhome:{
        position: 'absolute',
        width: 60,
        height: 60,
        marginTop:160,
        alignItems: 'center',
        marginRight: 2,
        justifyContent: 'center',
        borderRadius: 60,
        backgroundColor: 'transparent',
        right: 5,
      },
      btpdf1:{
        marginTop: 25,
        backgroundColor: 'red',
        marginLeft: 77,
        marginRight: 77,
        marginTop: 35,
        height: 50,
        padding: 13,
        borderRadius: 12
      },
      btpdf:{
        marginTop: 25,
        backgroundColor: 'red',
        marginLeft: 77,
        marginRight: 77,
        height: 50,
        padding: 13,
        borderRadius: 12
      },
      mestxt:
      {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',

      }
  });