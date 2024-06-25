import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import MastercardUI from './MastercardUI';
import TransactionList from './TransactionList';
import Footer from './Footer';

export default function Home() {
  const [name, setName] = useState('Ohenewaah Edinam')
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.HomeContainer}>
        <View style={styles.profileContainer}>
        <View style={styles.ProfileInfo}>
          <Image source={require('../assets/profile.jpeg')} style={styles.profileImage}/>
            <View>
            <Text style={styles.WelcomeInfo
            }>Welcome back,</Text>
            <Text style={styles.WelcomeName}>{name}</Text>
            </View>
        </View>

        <View style={styles.imageContainer2}>
        <Image source={require('../assets/search.png')} style={styles.searchImage}/>
        </View>
     </View>
     <View>
      <MastercardUI/>
     </View>

     <View style={styles.TransationOptions}>
            <View>
              <View style={styles.imageContainer}>
              <Image source={require('../assets/icons8-arrow-up-50.png')} style={styles.TransationImage}/>
              </View>
              <Text>Sent</Text>
            </View>

            <View>
            <View style={styles.imageContainer}>
            <Image source={require('../assets/icons8-arrow-down-50.png')} style={styles.TransationImage}/>
            </View>         
            <Text>Recieve</Text>
            </View>

            <View>
            <View style={styles.imageContainer}>
            <Image source={require('../assets/icons8-coin-50.png')} style={styles.TransationImage}/></View>           
            <Text>Loan</Text>
            </View>

            <View>
            <View style={styles.imageContainer}>
            <Image source={require('../assets/icons8-upload-to-cloud-50.png')} style={styles.TransationImage}/>
            </View>
            <Text>Topup</Text>
            </View>
     </View>
      
      <View style={styles.TransationView}>
        <Text style={styles.TransationView1}>Transaction</Text>
        <Text style={styles.TransationView2}>Sell All</Text>
      </View>

      <TransactionList/>
      
        </View>
     
      </ScrollView>
      <Footer/>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
// alignItems: 'center',
// justifyContent: 'center',
  },
  HomeContainer:{
    marginTop:60
  },
  profileContainer:{
    marginTop:50
  },
  profileImage:{
    width:50,
    height:50,
    left:-20,
    borderRadius: 25
  },
  searchImage:{
    width:20,
    height:20,
    
  },
  imageContainer2: {
    width: 50,  
    height: 50, 
    borderRadius: 25, 
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 60,
  },
  ProfileInfo:{
    flexDirection:'row',
    left: 40
  },
  profileContainer:{
    flexDirection:'row',
   
  },
  WelcomeInfo:{
    fontSize:20,
    color: '#A9A9A9',
    fontWeight:'400'
  },
  WelcomeName:{
    fontSize:22,
    fontWeight:'500'
  },
  TransationOptions:{
    marginTop:25,
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginBottom:20,
  },

  imageContainer: {
    width: 60,  
    height: 60, 
    borderRadius: 30, 
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  TransationImage:{
    width:35,
    height:30,
    marginHorizontal:5,
   
  },
  TransationView:{
    marginTop:'45',
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:30,
    marginRight:30
  },
  TransationView1:{
    fontSize:25,
    fontWeight:'500'
  },
  TransationView2:{
    fontSize:18,
    color:'#007BFF',
    fontWeight:'500'
  },
  footerImage:{
    width:20,
    height:20
  }
});
