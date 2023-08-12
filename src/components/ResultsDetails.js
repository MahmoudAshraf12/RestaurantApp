import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ResultsDetails = ({result}) =>{
    return(
        <View style={styles.view} >
            <Image style={styles.image} source={{uri : result.image_url}}/>
            <Text style= {styles.name}>{result.name}</Text>
            <Text style>{result.rating} Stars, {result.review_count} Reviewers</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    image:{
        width: 250,
        height:120,
        borderRadius: 4,
    },
    view:{
        margin:10 
    },
    name:{
        fontWeight: 'bold'
    }
})

export default ResultsDetails;