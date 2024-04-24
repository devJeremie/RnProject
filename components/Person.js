import { View, Text } from 'react-native'
import React from 'react'

 const Person = ({name, age}) => {
  return (
    <View>
      {
        age ? 
              <Text>Je suis : {name} | age : {age} </Text>
            : 
              <Text>Je suis : {name}</Text>
      }
     
    </View>
  )
}
export default Person;