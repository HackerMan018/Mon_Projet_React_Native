import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, ToastAndroid, ActivityIndicator,ImageBackground } from 'react-native'
import { SearchBar } from "react-native-elements"
import { useState, useEffect } from 'react'
import MovieRow from "./MovieRow";
import { useSelector } from "react-redux";
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

const Home = ({ route }) => {
    const [search, updateSearch] = useState("")
    const [validateSearch, setValidateSearch] = useState(false)
    const [activitySearch, setActivitySearch] = useState(false)
    const [movies, setMovies] = useState([])

    const handlerSearch = (text) => {
        updateSearch(text)
    }

    useFocusEffect(

        React.useCallback( () => {

            if (useIsFocused){

                

                setValidateSearch(true)
                fetch(
                    `https://www.omdbapi.com/?apikey=8a00c4a5&s=${search}`
                )
                .then((response) => response.json())
                .then(results => {
                    setMovies(results.Search)
                    setActivitySearch(false)
                })
            }
                
            }, [navigator])
    )

    useEffect(() => {

        setValidateSearch(false)
        fetch(
            `https://www.omdbapi.com/?apikey=8a00c4a5&s=${search}`
        )
        .then((response) => response.json())
        .then(results => {
            setMovies(results.Search)
            setActivitySearch(false)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [route,validateSearch])



    const submitEditing = (valueSearch) => {
        setValidateSearch(true)
        setActivitySearch(true)
    }

    const Activity = () => {
        if (activitySearch) {
            return (
                <View>
                    <ActivityIndicator size={"large"} color={"#0279CA"} />
                </View>
            )
        }

        else {
            return (<View></View>)
        }
    }


    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <SearchBar placeholder="Rechercher un film..."
                round
                lightTheme
                searchIcon={{ size: 24 }}
                onChangeText={(searchMovie) => handlerSearch(searchMovie)}
                value={search}
                onSubmitEditing = {() => submitEditing(search)}
                 />
            <ImageBackground source={require('../assets/recherche.png')} resizeMode="cover" style={styles.image1}></ImageBackground>
            <View >
                <Activity />
               
                <FlatList 
                    data={movies}
                    renderItem = {({ item: movie }) => <MovieRow movie={movie}/>}
                    keyExtractor={(movie) => movie.imdbID}
                />
            </View>
        </View>

    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height:700,
        width:300,
        marginLeft:50,
        marginBottom:10,
    },
    image1: {
        flex: 1,
        justifyContent: "center"
      },
})


