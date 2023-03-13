import React ,{useState,useEffect} from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import axios from "axios";
import Config from "react-native-config";

import useFetch from "../../hooks/useFetch";
import CategoriesCard from "../../components/CategoriesCard";

const Categories = ({navigation}) => {

    const data = useFetch(Config.API_CATEGORIES);

    const handleCategorySelect = (strCategory )=>{
        navigation.navigate("MealsPage", {strCategory});
    }

    const renderCategories = ({item}) => <CategoriesCard categories ={item} onSelect={()=> handleCategorySelect(item.strCategory)}/>


    return (   
            <FlatList
            data={data.categories}
            renderItem={renderCategories}
            keyExtractor={item => item.idCategory}
            />
    );
}

export default Categories;