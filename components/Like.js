import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import { useSelector } from "react-redux";
import MovieRow from "./MovieRow"; 
import MovieRow2 from './MovieRow2';

const Like = ({ navigation }) => {
    const {favorites} = useSelector(state => state.moviesReducers)



    return (
        <View>
            <FlatList 
                    data={favorites}
                    renderItem = {({ item: movie }) => <MovieRow movie={movie}/>}
                    keyExtractor={(movie) => movie.imdbID}
                />
        </View>
    )
}

export default Like

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
