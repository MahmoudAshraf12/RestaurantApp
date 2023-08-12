import React, {useState, useEffect} from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultsList';
import { SafeAreaView } from 'react-native-safe-area-context'


const SearchScreen=({navigation}) => {
    const [term, setTerm] = useState('');
    const[results,searchApi,errorMessage] = useResults();    

    const filterResultsByPrice = (price)=> {
        return results.filter(result =>{
            return result.price === price;
        });
    };

    return (
        // We Can Do <View style={{flex : 1}}> but that isn't the best Case
        <SafeAreaView>
        <SearchBar 
            term ={term} 
            onTermChange={setTerm}
            onTermSubmit={()=>searchApi(term)}
            />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
            <ResultList navigation={navigation} results={filterResultsByPrice('$')} title='Cost Effective'/>
            <ResultList navigation={navigation} results={filterResultsByPrice('$$')} title='Bit Pricer'/>
            <ResultList navigation={navigation} results={filterResultsByPrice('$$$')} title='Big Spender'/>
        </ScrollView>
    </SafeAreaView>
);
};

export default SearchScreen;