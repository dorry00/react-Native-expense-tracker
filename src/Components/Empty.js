import React from 'react'
import {View,Text} from 'react-native'

function Empty() {
    return (
        <View style={{flex:1}}>
             <View style={{
            marginTop:30,
            alignItems:'center',
            marginLeft:32}}>

                <Text style={{
                    color:'#ff4500',
                    fontWeight:700,
                    fintSize:20,
                    
            }}>No Transactions yet</Text>
            </View>
           
           
                    
        </View> 
    )
}

export default Empty
