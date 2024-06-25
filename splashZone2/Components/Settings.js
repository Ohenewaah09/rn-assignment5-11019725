import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image } from "react-native";
import Footer from "./Footer";



export default function Settings(){
    return(
        <View style={styles.Container}>
            <View style={styles.header}>
            <Text style={styles.headerText}>Settings</Text>
            </View>

            <View style={styles.settingsContainer}>
                <View style={styles.settingsList}>
                <View style={styles.settingsItem}>
                    <Text style={styles.settingsSubItem}>Language</Text>
                   <Image source={require('../assets/icons8-greater-than-48.png')} style={styles.settingsSign}/>
                </View>

                <View style={styles.settingsItem}>
                    <Text style={styles.settingsSubItem}>My Profile</Text>
                    <Image source={require('../assets/icons8-greater-than-48.png')} style={styles.settingsSign}/>
                </View>

                <View style={styles.settingsItem}>
                    <Text style={styles.settingsSubItem}>Contact Us</Text>
                    <Image source={require('../assets/icons8-greater-than-48.png')} style={styles.settingsSign}/>
                </View>

                <View style={styles.settingsItem}>
                    <Text style={styles.settingsSubItem}>Change Password</Text>
                    <Image source={require('../assets/icons8-greater-than-48.png')} style={styles.settingsSign}/>
                </View>

                <View style={styles.settingsItem}>
                    <Text style={styles.settingsSubItem}>Privacy Policy</Text>
                     <Image source={require('../assets/icons8-greater-than-48.png')} style={styles.settingsSign}/>
                </View>

                </View>
                <View>
                <Text style={styles.Theme}>Theme</Text>
                </View>

            </View>
            <Footer/>
           
            <StatusBar style="auto"/>
        </View>
    );
};




const styles = StyleSheet.create({
    Container:{
       
        backgroundColor: '#fff',
        flex: 1,
       
    },
    header:{
        alignItems: 'center',
        
    },
    headerText:{
        fontSize: 28,
        marginTop:50,
        fontWeight:'500'
    },
    settingsContainer:{
        top: 60,
        marginLeft:10,
        marginRight:10,
    },
    settingsItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 24,
        borderBottomColor:'#C8C8C8',
        borderBottomWidth: 1,
    },
    settingsSubItem:{
        fontSize:20,
        fontWeight:'500'
    },
    settingsSign:{
        weight:20,
        height:20
    },
    Theme:{
        top:50,
        fontSize:28,
        fontWeight:'600',
        marginLeft:20
    }
})