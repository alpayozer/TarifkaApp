import React from "react";
import { View, Text, TouchableWithoutFeedback, Image, FlatList } from "react-native";
import Config from "react-native-config";

import useFetch from "../../hooks/useFetch";
import MealCard from "../../components/MealCard";

const Meals = ({route,navigation}) => {

    const {strCategory} = route.params;

    const data = useFetch(Config.API_MEALS + strCategory);

    const handleMealSelect = (idMeal) => navigation.navigate("DetailsPage",{idMeal})

    const renderMeal = ({item}) => <MealCard meal={item} onSelect={()=> handleMealSelect(item.idMeal)}/>

    return (
        <View>
            <FlatList
            data={data.meals}
            keyExtractor={item => item.idMeal}
            renderItem={renderMeal}
            />
        </View>
    );
}

export default Meals;