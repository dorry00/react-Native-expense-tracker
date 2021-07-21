import React from 'react'
import {Text,View,StyleSheet, Button} from 'react-native'
import {Checkbox, List,Box} from 'native-base'
import { useSelector,useDispatch} from 'react-redux'
import {deleteTransaction} from '../Reducers/TransactionActions'


function DataItem({title,price,id}) {

  const dispatch=useDispatch();
  
 

  const { transactions } = useSelector(state=> state.transactions);
 

    return (
      <View style={styles.view}>
        <List.Item>
          <Button
          onPress={()=>{
            dispatch(deleteTransaction(id))
            console.log(id)
          }}
          
          ></Button>
          <Box>
          <Text style={styles.text}>{title}</Text>
          </Box>
          
            <Text style={{
              marginLeft:32,
              marginVertical:32,
              color:price>0?'#009bfc':'#ff4500',
              fontWeight:400,
              fontFamily:'Lato-Bold',
              fontSize:17,
              

            }}>{price>0?`$${price}`:`-$${Math.abs(price)}`}</Text>

         
          
        </List.Item>
          
         
      </View>
    )
}

export default DataItem;

const styles=StyleSheet.create({

  view:{
    paddingHorizontal:15,
    paddingVertical:30,
    marginVertical:3

  },
  text:{
    fontWeight:700,
    fontSize:17,
    marginLeft:15,
    borderBottomWidth:1,
    borderBottomColor:'#ffffff'

  }


});
