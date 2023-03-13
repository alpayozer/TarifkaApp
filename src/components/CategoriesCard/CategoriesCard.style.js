import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"orange",
    
    },
    inner_container:{
        flexDirection:"row",
        backgroundColor:"white",
        padding:10,
        borderBottomLeftRadius:40,
        borderTopLeftRadius:40,
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
        margin:10
    },
    image:{
        width:100,
        height:100,
        //backgroundColor:"red",
        resizeMode:"contain"
    },
    text:{
        //backgroundColor:"blue",
        flex:1,
        justifyContent:"center",
        paddingLeft:20,
    },
    inner_text:{
        fontSize:20
    }

})