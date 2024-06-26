import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { useTheme } from './ThemeContext';


const data=[
  {id:'1', title:'Apple Store', company: 'Entertainment', amount: '-$5,99', image: require('../assets/appleLogo.png')}, 
  {id: '2', title:'Spotify', company: 'Music', amount:'-$12,99', image: require('../assets/icons8-spotify-48.png')},
  {id: '3', title:'Money Transfer', company: 'Transaction', amount:'$300', image: require('../assets/icons8-downloading-updates-48.png')} ,
  {id: '4', title:'Grocery', company: 'Shopping', amount:'-$88', image: require('../assets/icons8-cart-24.png')} ,

];

const List = ({title, company,amount, image }) =>{
  const {theme} = useTheme();
  const amountStyle = amount.startsWith('$') ? styles.positiveAmount : styles.negativeAmount;

  return(
    <View style={[styles.ListContainer, {backgroundColor:theme.background}]}>
    <View style={styles.Transactions}>
      <View style={[styles.imageContainer, {backgroundColor: theme.container}]}>
      <Image source={image} style={styles.transactionImage}/>
      </View>
      
      <View>
        <Text style={[styles.titleStyle, {color: theme.text}]}>{title}</Text>
        <Text style={styles.companyStyle}>{company}</Text>
      </View>
      <View>
      <Text style={[amountStyle, {color: theme.text}]}>{amount}</Text>
      </View>
    </View>
  </View>
  );
 
};

export default function TransactionList() {
  const {theme} = useTheme();
  return (
    <View style={[styles.container,  {backgroundColor:theme.background}]}>
      <FlatList
        data={data}
        renderItem={( {item} ) => (
          <List
            title={item.title}
            company={item.company}
            amount={item.amount}
            image={item.image}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContainer}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    width:'100%',
    
  },
  flatListContainer: {
    padding: 16,
},

imageContainer: {
  width: 60,  
  height: 60, 
  borderRadius: 30, 
  backgroundColor: '#f6f6f6',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 10,
},
transactionImage:{
  width: 30,
  height: 30,
  
},
Transactions:{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 10,
  paddingVertical: 10,
  paddingHorizontal: 15,
 
  borderRadius: 8,
},
listContainer: {
  marginBottom: 10, 
},

titleStyle:{
  fontSize:24,
  fontWeight:'500'
},
amountStyle:{
  left: 0,
  marginLeft:50,
  fontSize: 20
},
companyStyle:{
  color:'#BEBEBE'
},
positiveAmount: {
  color: '#007BFF',
},
negativeAmount: {
  color: 'black',
},

});
