import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
  const navigation = useNavigation();

  const handleNavigation = (route) => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => handleNavigation('Home')}>
          <View style={styles.footerItem}>
            <Image source={require('../assets/icons8-home-24.png')} style={styles.footerImage} />
            <Text>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('MyCard')}>
          <View style={styles.footerItem}>
            <Image source={require('../assets/icons8-wallet-32.png')} style={styles.footerImage} />
            <Text>My card</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Statistics')}>
          <View style={styles.footerItem}>
            <Image source={require('../assets/icons8-pie-chart-48.png')} style={styles.footerImage} />
            <Text>Statistics</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Settings')}>
          <View style={styles.footerItem}>
            <Image source={require('../assets/icons8-settings-50.png')} style={styles.footerImage} />
            <Text>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  footerImage: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  footerItem: {
    alignItems: 'center',
  },
});