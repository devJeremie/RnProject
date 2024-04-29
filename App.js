import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
//import components
import Person from './components/Person';
import { Button} from 'react-native-web';

export default function App() {

  // const [name, setName] = useState("Stan");//state composant Button

  // const obj = { //objet pour le state de l'app
  //   name: "SpiderOusmane",
  //   age: 21
  // }
  // const [infos, setInfos] = useState(obj); //on pourrai initialiser l'objet ici dans les parenthèses ou bien faire un const
  // const handlePress = () => { //fonction pour le bouton
  //   setInfos({
  //     name: "ThéoMan",
  //     age: 22
  //   })
  // }

  // const handlePress = (arg) => {
  //   setName(arg); //on change le nom de la personne en fonction du bouton cliqué
  // }
  
  // const handlePress = () => { //change the state of name when button is pressed
  //   setName("Steve"); 
  // }

  // const name = 'Jeremie';
  // const getNames = (firstName, secondName, thirdName) => {
  //   return firstName + " " + secondName + " " + thirdName;
  //   // return `${firstName} ${secondName} ${thirdName}`; Autre facon de faire 
  // }

  ///// TEXT INPUT ///////
  // const [text, setText] = useState('Indiquer votre nom') ;//exemple textinput

  //const pour les inputs
  // const [name, setName] = useState();
  // const [age, setAge] = useState();

  return (
    <View style={styles.wrapper}> 

      {/* <Person name= "Jeremie" age= "41">Alien</Person>
      <Person name= "Tyfaine">Human</Person>
      <Person name= "Mathias" age= "26">Human</Person>  */}
      {/* <View>
        <Text style={styles.textTwo}>{name}</Text>
        <Button title="Cliquez ici" 
                color="#841584"
                onPress={() => setName("Homer")} 
        />
      </View> */}
      {/* <View>
        <Text style={styles.textTwo}>Nom: {infos.name}</Text>
        <Text style={styles.textTwo}>Age: {infos.age}</Text>
        <Button title="Cliquez ici" 
                color="blue"
                onPress= {(handlePress)}
        />
      </View> */}
      
      {/*input*/}
      {/* <View style={styles.textInputWrapper}>
        <Text style={styles.text} >Nom: {name}</Text>
        <TextInput 
          placeholder='Indiquez votre nom'
          style={styles.textInput}
          onChangeText={val => setName(val)}
        />
         <Text style={styles.text} >Age: {age}</Text>
        <TextInput 
          placeholder='Indiquez votre age'
          style={styles.textInput}
          onChangeText={val => setAge(val)}
          keyboardType='numeric'
        />
      </View> */}

      {/* <Text>
        Je m'appelle {getNames('Roger', 'Stan', 'Steve')}
      </Text> */}

   
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
   textTwo : {fontFamily: 'Cochin', fontSize: 20,fontWeight: 'bold' },
   textInputWrapper : 
    {marginTop: 50,
     backgroundColor: 'pink',
     alignItems: 'center', //permet de bien centrer les éléments rappelez vous de la doc alternative sinon c colé a gauche
     height: 200,
     width: "100%"
    },
    textInput : {
      height: 40,
      borderColor: 'grey',
      borderWidth: 1,
      padding: 10,
      margin: 9,
      width: "90%",
    },
    text: {
      fontSize: 20
    }
})