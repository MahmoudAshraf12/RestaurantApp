import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'

const SearchBar = ({term , onTermChange, onTermSubmit}) =>{
    return(
            <View style={styles.backgroundStyle}>
                <Feather style={styles.iconStyle} name="search"/>
                <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Search"
                    style = {styles.inputStyle}
                    value={term}
                    onChangeText= {onTermChange}
                    onEndEditing= {onTermSubmit}
                />
        </View>
    );
}
const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor : '#F0EEEE', 
        height : 50,
        margin: 22,
        flexDirection:"row",
        borderRadius: 10,
    },
    iconStyle:{
        alignSelf: 'center',
        fontSize:30,
        color: "black"
    },
    inputStyle:{
        marginHorizontal:15,
        flex:1,
        fontSize: 20,
    }
});

export default SearchBar;