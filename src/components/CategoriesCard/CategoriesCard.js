import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";

import styles from "./CategoriesCard.style";

const CategoriesCard = ({ categories, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container} >
                <View style={styles.inner_container}>
                   
                        <Image
                        style={styles.image}
                        source={{ uri: categories.strCategoryThumb }} />
                    
                    <View style={styles.text}>
                        <Text style={styles.inner_text}>{categories.strCategory}</Text>
                    </View>
                </View>
            </View>

        </TouchableWithoutFeedback>
    );
}

export default CategoriesCard;