import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import { StyleSheet } from 'react-native'
import Input from '../components/form/Input'
import FormItem from '../components/form/FormItem'

const InputCheker = () => {
    const [email,setEmail] = useState('hehe boei')

    console.log(email)

    const inptuData = [
        {
            label:'Name',
            dataObj:{
                name:'name',
                value:email,
                func:setEmail
            },
            child:data=><Input {...data} />
        },
        {
            label:'Email',
            dataObj:{
                name:'email',
            },
            child:data=><Input {...data} />
        },
    ]

  return (
    <View style={{flex:1}}>
        {inptuData.map(element=>(
            <FormItem key={element.name} {...element} />
        ))}
    </View>
  )
}

export default InputCheker

const styles = StyleSheet.create({

})