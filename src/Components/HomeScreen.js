import React from 'react'
import { View,Text,StyleSheet,FlatList } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import {Button,Container,CheckBox,Body,Right,Item} from 'native-base'
import Animated from 'react-native-reanimated'
import DataItem from './DataItem'
import {useSelector} from 'react-redux'
import Empty from './Empty';

export const HomeScreen = ({ navigation })=>{


const {transactions} = useSelector(state => state.transactions);

const prices = transactions.map((transaction) => transaction.price);

const totalPrices = prices.reduce( (prev,cur) => (prev += cur),0);

const expenses = prices.filter(price => price < 0)
.reduce((prev,cur)=>(prev += cur),0)*-1;

     
const renderItem = ({ item }) => (
        <DataItem title={item.title} price={item.price} id={item.id}/>
      );



    
    return (
        <Container>
        <Animated.View style={styles.animatedView}>
        <LinearGradient colors={['#4d0000', '#660000', '#800000','#990000']}  style={styles.linearGradient} >
                <View style={styles.balanceView}>
                    <Text  style={styles.textBalance}>Current Balance</Text>
                    <Text  style={styles.textValue}>${totalPrices}</Text>
                     <Text  style={styles.textSecret}>123********456</Text>
                </View>

                <View style={{flex:1}}>

                    <Button
                    light
                    style={{
                        padding:10,
                        marginTop:10,
                        borderWidth:3,
                        alignItems:'center',
                        justifyContent:'center',
                        borderColor:'#fff',
                        backgroundColor:'#e10c62'
                        }}
                    
                    onPress={() => navigation.navigate('Add')}>Add</Button>
                     <Text  style={styles.Balance}> Expense</Text>
                     <Text  style={styles.valueBalance}>${expenses}</Text>
                </View>
                </LinearGradient>            
        </Animated.View>


        <View style={{flex:1}}>

          {
          transactions.length>0?
          (
          <FlatList
          data={transactions}
          renderItem ={renderItem}
         keyExtractor={item=>item.id} 
        />):(
         <Empty/>
        )
          }
            
           
                    
        </View> 
        <View>
       
        </View>
        </Container>
    );
}



const styles=StyleSheet.create({
    animatedView:{
        flex:1,
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:20
    },
    linearGradient: {
        width:'100%',
        borderRadius:15,
        height:189,
        flexDirection:'row',
        padding:22

      },
      balanceView:{
          width:'70%',
          alignItems:'flex-start'
      },

      textBalance:{
          fontSize:15,
          fontFamily:'Lato-Regular',
          fontWeight:600,
          color:'#fff',
          marginTop:12


          
      },

      textValue:{
        fontSize:30,
        fontFamily:'Lato-Medium',
        fontWeight:700,
        color:'#fff'

      },
      textSecret:{
        fontSize:18,
        fontFamily:'Lato-Regularr',
        fontWeight:700,
        color:'#fff',
        marginTop:65

      },
      Balance:{
        fontSize:10,
        marginTop:12,
        fontFamily:'Lato-Regular',
        fontWeight:700,
        color:'#fff'


        
    },
    valueBalance:{
        fontSize:15,
        marginTop:4,
        fontFamily:'Lato-Regular',
        fontWeight:700,
        color:'#fff'


        
    },



});
