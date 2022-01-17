import React, { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity} from "react-native";
import {Icon} from 'react-native-elements';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { addFavorite, removeFavorite } from "../redux/actions/movies";

export default function MovieRow({ movie }){

    const [isFavorite,setIsFavorite] = useState(false)
    const {favorites} = useSelector(state => state.moviesReducers)
    const dispatch = useDispatch()

    

    const actions = bindActionCreators({
        addFavorite,
        removeFavorite,
    }, dispatch)

    function checkId(mov) {
        return mov.imdbID == this
    }

    const HeartIcon = (props) => {
        const idMovie = props.idMovie
        if (favorites.findIndex(checkId, idMovie) != -1 ) {
            return <Icon name="heart" size={36} color='red' type="font-awesome" />
        }        
        if (isFavorite) {
            return <Icon name="heart" size={36} color='red' type="font-awesome" />
        } 
        else {
            return <Icon name="heart-o" size={36} color='red' type="font-awesome" />
        }

    }

    const statuFavorite = () => {

        if (favorites.findIndex(checkId, id) != -1 ) {
            actions.removeFavorite(id)
            setIsFavorite(false)            
        }
        else if (isFavorite) {
            actions.removeFavorite(id)
            setIsFavorite(false)
        }
        else {
            actions.addFavorite({imdbID: id, Poster: img, Title: title, Type: type, Year: year})
            setIsFavorite(true)
        }        
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: movie.Poster}} style={styles.poster}/>
            <Text style={styles.title}>{movie.Title}  {"\n"}
                <Text style={styles.title1}> {movie.Type} {"\n"}
                    <Text style={styles.title2}> {movie.Year}</Text>
                </Text>
            </Text>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={(id, img, title, type, year) => statuFavorite(movie.imdbID, movie.Poster, movie.Title, movie.Type, movie.Year)}>
                    <HeartIcon idMovie={movie.imdbID} />
                </TouchableOpacity>
            </View>
            
        </View>

    )
}

const styles = StyleSheet.create({

    /*#4F4C4B*/
    container:{
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    poster: {
        height: 120,
        width: 70,
        resizeMode: 'contain',
        overflow: 'hidden',
        borderRadius: 10,
    },

    title: {
        flex: 2,
        fontSize: 17,
        fontWeight: '300',
        marginLeft: 10,
        color: 'black'

    },


    title1: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: '200',
        color: '#656464',
        textTransform: 'capitalize'

    },

    title2: {
        marginLeft: 10,
        fontWeight: '300',
    },



    iconContainer : {
        flex: 0.3,
    }

})