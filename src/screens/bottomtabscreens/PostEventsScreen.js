import { StyleSheet,View, Text } from 'react-native'
import React from 'react'

const PostEventsScreen = () => {
    return (
        <View style={style.container}>
          <Text>Add A New Event</Text>
        </View>
      )
    }
    const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#009387'
    }
    })

export default PostEventsScreen