import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';


const data=[
  {id:'1', title:'Apple Store', company: 'Entertainment', amount: '-$5,99', image: require('../assets/appleLogo.png')}, 
  {id: '2', title:'Spotify', company: 'Music', amount:'-$12,99', image: require('../assets/icons8-spotify-48.png')},
  {id: '3', title:'Money Transfer', company: 'Transaction', amount:'$300', image: require('../assets/icons8-downloading-updates-48.png')} ,
  {id: '4', title:'Grocery', company: 'Shopping', amount:'-$88', image: require('../assets/icons8-cart-24.png')} ,

];

const List = ({title, company,amount, image }) =>{
  return(
    <View style={styles.ListContainer}>
    <View style={styles.Transactions}>
      <View style={styles.imageContainer}>
      <Image source={image} style={styles.transactionImage}/>
      </View>
      
      <View>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.companyStyle}>{company}</Text>
      </View>
      <View>
        <Text style={styles.amountStyle}>{amount}</Text>
      </View>
    </View>
  </View>
  );
 
};

export default function TransactionList() {
  return (
    <View style={styles.container}>
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
  backgroundColor: 'gray',
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
  backgroundColor: '#f9f9f9',
  borderRadius: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 1,
  elevation: 2,
},
listContainer: {
  marginBottom: 10, 
},

titleStyle:{
  fontSize:24
},
amountStyle:{
  left: 0,
  marginLeft:50
}
});
