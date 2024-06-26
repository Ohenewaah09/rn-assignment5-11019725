import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function MastercardUI() {
  return (
    <View style={styles.container}>
     
      <View style={styles.masterCard_Container}>
        <View style={styles.ImageTop}>
          <Image source={require('../assets/chipCard.png')} style={styles.ImageTop1}/>
          <Image source={require('../assets/contactlessPay.png')}
          style={styles.ImageTop2}/>
        </View>

        <View>
          <Text style={styles.CardNumber}>4562   1122   4595   7852</Text>
          <Text style={styles.CardName}>AR Jonson</Text>
        </View>
        
        <View style={styles.TextContainer}>
          <View>
            <Text style={styles.TextDate}>Expiry Date</Text>
            <Text style={styles.Text}>24/2000</Text>
          </View>

          <View style={styles.cardID}>
            <Text style={styles.TextDate}>CVV</Text>
            <Text style={styles.Text}>6986</Text>
          </View>

          <View style={styles.Logo}>
            <Image source={require('../assets/mastercard_logo.png')} style={styles.cardLogo}/>
            <Text style={styles.Text}>MasterCard</Text>
          </View>
        </View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    left: 45,
    backgroundColor: '#fff',
    marginTop:20,
    // alignItems:'center',
    // justifyContent:'center'
  },
  masterCard_Container:{
    right:45,
    left:-30,
    backgroundColor:'#25253d',
    padding:10,
    borderRadius:20
  },
  ImageTop:{
    flexDirection:'row',
  },
  ImageTop1:{
    width:40,
    height:40,
  },
  ImageTop2:{
    width:40,
    height:40,
    left:250
  },
  cardLogo:{
    width:40,
    height:40
  },
  CardNumber:{
    fontSize:28,
    color:'#fff'
  },

  CardName:{
    fontSize:20,
    marginTop:6,
    color:'#fff'

  },
  TextContainer:{
    marginTop:10,
    flexDirection:'row',
  },
  cardID:{
    left:30
  },
  Logo:{
    left:130
  },
  Text:{
    color:'#fff'
  },
  TextDate:{
    color: 'gray'
  }
});
