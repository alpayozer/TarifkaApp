import React from "react";
import { View, Text, Image, FlatList } from "react-native";

import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import DetailsCard from "../../components/DetailsCard";


const Details = ({route})=>{

    const {idMeal} = route.params;

    const data = useFetch(Config.API_DETAILS + idMeal);
    //console.log(data);

    const renderDetails = ({item}) => <DetailsCard details={item}/>
    return(
        <View>
            <FlatList
            data={data.meals}
            keyExtractor={item => item.idMeal}
            renderItem={renderDetails}
            />
        </View>
    
    );
}

export default Details;