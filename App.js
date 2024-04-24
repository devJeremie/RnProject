import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
//import components
import Person from './components/Person';

export default function App() {

  // const name = 'Jeremie';
  // // const getNames = (firstName, secondName, thirdName) => {
  // //   return firstName + " " + secondName + " " + thirdName;
  //   // return `${firstName} ${secondName} ${thirdName}`; Autre facon de faire 
  // }

  return (
    <View style={styles.wrapper}> 

      <Person name= "Jeremie" age= "41">Alien</Person>
      <Person name= "Tyfaine">Human</Person>
      <Person name= "Mathias" age= "26">Human</Person>
      {/* <Text>
        Je m'appelle {getNames('Roger', 'Stan', 'Steve')}
      </Text> */}

    {/*je change l'axe en horizontal 'flexDirection: 'row''*/}
      {/* <View style={styles.viewOne}>
        <Text style={styles.textOne}>Premier pas React Native</Text>
        <Text style={styles.textOne}>On se lance</Text>
        <Text style={styles.textOne}>C'est parti !!</Text>
      </View>
      <View style={styles.viewTwo}>
        <Text style={styles.textTwo}>Deuxième pas React Native</Text>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper : {marginTop: 50, flexDirection: 'column'},
  // viewOne : {backgroundColor: 'green'},
  // textOne : {fontFamily: 'Cochin'} ,
  // viewTwo : {backgroundColor: 'purple'},
  // textTwo : {fontFamily: 'Cochin', fontSize: 20,fontWeight: 'bold' },
})