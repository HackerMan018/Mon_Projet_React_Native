import React from 'react'
import { StyleSheet, Text, View,Button,Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from '../navigation/StackNavigator'
import TabNavigator from '../navigation/TabNavigator'


const Films = ({ navigation }) => {
    return (
        <View>
            <Image
            style = {styles.image}
            source={require('../assets/image4.jpeg')}
            />
        <Button
            
            title="Fin"
            //onPress={() => }
        />
            
        </View>
    )
}


export default Films

const styles = StyleSheet.create({
    image: {
        height:700,
        width:300,
        marginLeft:50,
        marginBottom:10,
    },
    conatiner:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    bouton:{
        width:100,
        height:400
    }
})
