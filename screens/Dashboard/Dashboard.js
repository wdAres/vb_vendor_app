import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Color } from '../../GlobalStyles'
import DB_Tiles from './components/DB_Tiles'
import PaymentGraph from '../../components/PaymentGraph/PaymentGraph'

const Dashboard = () => {
  return (
    <>
     <Header label={'Dashboard'} hideArrow={true} />
     <ScrollView
        contentContainerStyle={styles.inner_container}
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        showsVerticalScrollIndicator={false}
     >
            <DB_Tiles />
            <PaymentGraph /> 
     </ScrollView>
    </>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    inner_container:{
        paddingHorizontal: responsiveWidth(5.12),
        paddingVertical: responsiveHeight(2.36),
        backgroundColor:Color.colorWhite,
        // flex:1,
        gap:responsiveHeight(2.61),
    },
})