import React from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultsDetails from "./ResultsDetails";
const ResultList = ({title,results,navigation}) =>{
    if(!results.length){
        return null;
    };
    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({item}) =>{
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate('Details' , {id: item.id})}>
                            <ResultsDetails result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginHorizontal:11,
        
    }
});

export default ResultList; 