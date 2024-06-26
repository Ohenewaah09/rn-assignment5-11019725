import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import MastercardUI from './MastercardUI';
import TransactionList from './TransactionList';
import Footer from './Footer';
import { useTheme } from './ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  const [name, setName] = useState('Ohenewaah Edinam');

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/profile.jpeg')} style={styles.profileImage} />
        <View>
          <Text style={styles.WelcomeInfo}>Welcome back,</Text>
          <Text style={[styles.WelcomeName, { color: theme.text }]}>{name}</Text>
        </View>
        <View style={styles.imageContainer2}>
          <Image source={require('../assets/search.png')} style={styles.searchImage} />
        </View>
      </View>

      <MastercardUI />

      <View style={styles.TransationOptions}>
        <View>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/icons8-arrow-up-50.png')} style={styles.TransationImage} />
          </View>
          <Text style={[styles.Action, { color: theme.text }]}>Sent</Text>
        </View>

        <View>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/icons8-arrow-down-50.png')} style={styles.TransationImage} />
          </View>
          <Text style={[styles.Action, { color: theme.text }]}>Receive</Text>
        </View>

        <View>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/icons8-coin-50.png')} style={styles.TransationImage} />
          </View>
          <Text style={[styles.Action, { color: theme.text }]}>Loan</Text>
        </View>

        <View>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/icons8-upload-to-cloud-50.png')} style={styles.TransationImage} />
          </View>
          <Text style={[styles.Action, { color: theme.text }]}>Topup</Text>
        </View>
      </View>

      <View style={styles.TransationView}>
        <Text style={[styles.TransationView1, { color: theme.text }]}>Transaction</Text>
        <Text style={styles.TransationView2}>Sell All</Text>
      </View>

      <TransactionList />

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchImage: {
    width: 20,
    height: 20,
  },
  imageContainer2: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  WelcomeInfo: {
    fontSize: 20,
    color: '#BEBEBE',
    fontWeight: '400',
  },
  WelcomeName: {
    fontSize: 22,
    fontWeight: '500',
  },
  TransationOptions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 25,
    marginBottom: 20,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TransationImage: {
    width: 35,
    height: 30,
  },
  TransationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 45,
  },
  TransationView1: {
    fontSize: 25,
    fontWeight: '500',
  },
  TransationView2: {
    fontSize: 18,
    color: '#007BFF',
    fontWeight: '500',
  },
  Action: {
    fontWeight: '500',
  },
});
