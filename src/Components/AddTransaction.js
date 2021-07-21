import React,{useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container, Button, Input, FormControl } from "native-base";
import {useDispatch} from 'react-redux';
import {addTransaction} from '../Reducers/TransactionActions'

function AddTransaction() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [price,setPrice] = useState();

  const onSubmitFunction = () => {
      
      if( !title || !price ){
          return alert("please provide all details!");
      }

   

    const id = Math.floor(Math.random()*100000);
    const newTransaction={
        id,
        title,
        price:+price,
    };
    
    dispatch(addTransaction({...newTransaction}));

}

  

  return (
    <Container>
      <View>
        <FormControl isRequired isInvalid>
            <View style={styles.item}>
          <Input
            placeholder="Add Expense"
            onChangeText={(title) => setTitle(title)}
          ></Input>
          </View>
          <View style={styles.item}>
          <Input
            placeholder="Expense Price..."
            keyboadType="number-pad"
            onChangeText={(price) => setPrice(price)}
          ></Input>
          </View>
          <View style={styles.item}>
          <Button onPress={onSubmitFunction}>Add Transaction</Button>
          </View>
        </FormControl>
      </View>
    </Container>
   
   
  
  );
};

export default AddTransaction;

const styles = StyleSheet.create({
  item: {
    marginVertical: 20,
    marginHorizontal:30,
    flex:1
  },
});
