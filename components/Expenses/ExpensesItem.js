import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constanse/Styles';
import { getFormattedDate } from '../../util/date';
import {useNavigation} from '@react-navigation/native'


const ExpensesItem = ({description,date,amount,id}) => {
const navigation = useNavigation();


    function expensePressHandler(){
navigation.navigate("ManageExpenses",{expenseId:id});
    }



  return (
    <Pressable onPress={expensePressHandler} style={({pressed})=>pressed&&styles.pressed}>
      <View style={styles.expenseItem}>
        <View>
        <Text style={[styles.textBase,styles.description]}>{description}</Text>
        <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
        <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpensesItem

const styles = StyleSheet.create({
pressed:{
opacity:0.75
},
    expenseItem:{ 
        padding:12,
        marginVertical:8,
        backgroundColor:GlobalStyles.colors.primary500,
        flexDirection:'row',
        borderRadius:6,
        justifyContent:"space-between",
        elevation:3,
        shadowColor:GlobalStyles.colors.gray500,
        shadowOffset:{width:1,height:1},
        shadowRadius:4,
        shadowOpacity:0.4
    },
    textBase:{
        color:GlobalStyles.colors.primary50
    },
    description:{
        fontSize:16,
        margin:8,
        fontWeight:'bold',
    },
    amountContainer:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        minWidth:80
    },
    amount :{
        color:GlobalStyles.colors.primary500,
        fontWeight:'bold'
    }
})