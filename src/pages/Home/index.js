import react, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Modal,ScrollView,Image} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';


export default function Home() {
const  navigation = useNavigation();

  return (
    <ScrollView>

     
    <View style={styles.container}>
       
      <View style={styles.content}>



            <StatusBar style = "light"  />
     </View>
    </View>
    <View>
      <Text style={styles.titulo}>Portal da transparência</Text>  
      <Text style={styles.subtitulo}>Sergipe</Text> 
    </View>

    <View>
      
    </View>
    <View style={styles.icone}>
    <Image 
    source={require('../Images/Corona.jpg') }
    style={{borderRadius:100,  width: 110, height: 110}}
    />
    </View>

      <View style={styles.subtitulo2}>
      <Text style={styles.subtitulo2txt}>
        Tranferências Aos Municípios 
      </Text>
      </View>

      <Text style={styles.textop}>
      Esta seção contém a parcela das receitas arrecadadas pelo Estado de Sergipe que é repassada aos Municípios. Dentre os principais repasses legais e constitucionais fornecidos aos municípios estão: Imposto sobre Circulação de Mercadorias e Serviços – ICMS, Imposto sobre a Propriedade de Veículos Automotores – IPVA, Imposto sobre Produtos Industrializados – IPI, Royalties e Fundo de Desenvolvimento do Ensino Fundamental – FUNDEB.
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('ICMS')}  style = {styles.icms}>
        <Text style = {styles.icmst}>
          ICMS
         </Text>
         <Text style={styles.icmsp}>
            imposto sobre circulação de mercadorias e serviços
          </Text>
          
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('IPI')}  style = {styles.ipi}>
        <Text style = {styles.ipit}>
          IPI
         </Text>
         <Text style={styles.ipip}>
            imposto sobre produtos Industrializados
          </Text>
          
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>  navigation.navigate('IPVA')} style = {styles.ipva}>
        <Text style = {styles.ipvat}>
          IPVA
         </Text>
         <Text style={styles.ipvap}>
            imposto sobre propriedade de veiculos automotores
          </Text>
          
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>  navigation.navigate('Royalties')} style = {styles.royal}>
        <Text style = {styles.royaltxt}>
          Royalties
         </Text>
          
      </TouchableOpacity>
      
    </ScrollView>
    
       
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: -2,
    flex: 1,
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
  }, 
  royal:{
    
    backgroundColor: 'red',
    height: 120,
    borderRadius: 22,
    paddingTop: 40,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: -120,
    marginRight: 10,
    marginLeft: 220,
  
  },
  royaltxt:{
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginTop: -45

  },
  ipva:{
    fontSize: 20,
    color: 'white',
    backgroundColor: 'red',
    height: 120,
    borderRadius: 22,
    paddingTop: 20,
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 220,
    marginTop: 40,
    fontWeight: 'bold',
  },
  ipvat:{
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: -6

  },
  ipvap:{
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5

  },
  ipi:{
    fontSize: 20,
    color: 'white',
    backgroundColor: 'red',
    height: 120,
    borderRadius: 22,
    paddingTop: 20,
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 220,
    marginTop: -117,
    marginRight: 10,
    fontWeight: 'bold',
  },
  ipit:{
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: -6
  },
  ipip:{
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 15
  
  },
  icms:{
    fontSize: 20,
    color: 'white',
    backgroundColor: 'red',
    marginLeft: 10,
    marginRight: 220,
    marginTop: 35,
    height: 120,
    borderRadius: 22,
    paddingTop: 20,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',

  },
  icmst:{
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  icmsp:{
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    marginLeft: 5,
    marginRight: 5
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
    marginTop: 10,
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
  textop:{
    marginLeft: 15,
    textAlign: "left",
    fontSize: 12,
    marginTop: 12,
  },
  icone:{
    position: 'absolute',
        width: 30,
        height: 60,
        marginTop:90,
        alignItems: 'center',
        marginRight: 40,
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: 'transparent',
        right: 5,
  }
   
});
