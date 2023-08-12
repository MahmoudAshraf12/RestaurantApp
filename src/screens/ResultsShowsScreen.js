import React, { useEffect, useState } from "react";
import { View, Text,StyleSheet,FlatList, Image } from "react-native";
import yelp from "../api/yelp";
import { SafeAreaView } from 'react-native-safe-area-context'



const ResultsShowsScreen = ({route}) =>{
    const[result, setResult] = useState(null);
    const id = route.params.id;
    const getResult = async id =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() =>{
        getResult(id);
    }, []);

    if(!result){
        return null;
    }
    return(
        <SafeAreaView>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo=>photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri:item}}/>
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    image:{
        width:300,
        height:200,
        margin:20,
    },
    title:{
        fontWeight:'bold',
        fontSize: 40,
        marginLeft:20
    }
}); 

export default ResultsShowsScreen;