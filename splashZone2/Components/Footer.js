import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from './ThemeContext';

export default function Footer() {
  const {theme} = useTheme();

  const navigation = useNavigation();
  const handleNavigation = (route) => {
    navigation.navigate(route);
  };

  return (
    <View style={[styles.Container, {backgroundColor: theme.background}]}>
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => handleNavigation('Home')}>
          <View style={styles.footerItem}>
           <Image source={require('../assets/icons8-home-24.png')} style={styles.footerImage} /> 
            {/* <Image source={require('../assets/home.png')}  /> */}
            <Text style={styles.footerTabs}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('MyCard')}>
          <View style={styles.footerItem}>
            <Image source={require('../assets/myCards.png')}  />
            <Text style={styles.footerTabs}>My card</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Statistics')}>
          <View style={styles.footerItem}>
            <Image source={require('../assets/statictics.png')}  />
            <Text style={styles.footerTabs}>Statistics</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Settings')}>
          <View style={styles.footerItem}>
          {/* <Image source={require('../assets/icons8-settings-50.png')} style={styles.footerImage} /> */}
             <Image source={require('../assets/settings.png')} style={styles.footerImage}/> 
            <Text style={styles.footerTabs}>Settings</Text>
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
    paddingVertical: 2,
  },
 
  
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  footerItem: {
    alignItems: 'center',
    
  },
  footerTabs:{
    color:'#b0afad'
  },
  footerImage:{
    width:24,
    height:24
  }
});
