import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const Container = ({children,style}) => {
  return (
    <View style={[styles.container,style]}>
      {children}
    </View>
  )
}

export default Container

const styles = StyleSheet.create({
    container:{
        borderRadius:6,
        borderWidth:1,
        borderColor:'#d9d9d9',
        borderStyle:'solid',
    }
})