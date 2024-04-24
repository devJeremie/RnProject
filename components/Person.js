import { View, Text } from 'react-native'
import React from 'react'

 const Person = ({name, age, children}) => {
  return (
    <View>
      {
        age ? 
              <Text>Je suis : {name} | age : {age} | {children}</Text>
            : 
              <Text>Je suis : {name} | {children}</Text>
      }
     
    </View>
  )
}
export default Person;