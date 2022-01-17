import React from 'react'
import { StyleSheet, Text, View,Button,Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Liste from './Liste'


const Tuto = ({ navigation }) => {
    return (
        <View style={styles.conatiner1}>

            <View style={styles.conatiner}>
                <Image style = {styles.image} source={require('../assets/image1.jpeg')} />
                <Image style = {styles.image} source={require('../assets/image2.jpeg')} />   
            </View>

            <View style={styles.conatiner}>
                <Image style = {styles.image} source={require('../assets/image3.jpeg')} />
                <Image style = {styles.image}  source={require('../assets/image4.jpeg')}/>   
            </View>
        
        </View>

        
    )
}


export default Tuto

const styles = StyleSheet.create({
    image: {
        height:350,
        width:150,
        marginLeft:50,
        marginTop:10,
        marginBottom:10,
    },
    conatiner:{
        flexDirection:'row'
    },
    conatiner1:{
        flexDirection:'column'
    },
    bouton:{
        width:100,
        height:400
    }
})
