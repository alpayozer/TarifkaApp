import React from "react";
import { View, Text, TouchableWithoutFeedback, ImageBackground } from "react-native";

import styles from "./MealCard.style";

const MealCard = ({ meal, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <View style={styles.inner_container}>
                    <ImageBackground style={styles.image}
                        source={{ uri: meal.strMealThumb }} resizeMode="cover" borderRadius={20}>

                        <View style={styles.text}>
                            <Text style={styles.inner_text}>{meal.strMeal}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default MealCard;