import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";

import styles from "./DetailsCard.style";

const DetailsCard = ({ details }) => {

    const watchYoutube = () => {
        Linking.openURL(details.strYoutube);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: details.strMealThumb }} />
            <View style={styles.inner_container}>
                <Text style={styles.strMeal}>{details.strMeal}</Text>
                <Text style={styles.strArea}>{details.strArea}</Text>
                <Text style={styles.strInstructions}>{details.strInstructions}</Text>
            </View>

            <TouchableOpacity style={styles.button}
                onPress={watchYoutube}
            >
                <Text style={styles.button_text}>Watch Youtube</Text>
            </TouchableOpacity>
        </View>

    );
}

export default DetailsCard;