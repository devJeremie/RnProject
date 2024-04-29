import { View, Text, StyleSheet, TextInput, ScrollView, FlatList } from 'react-native'
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

  //les objets en react Native
  const obj = [
    {id: "1", name: "Stan", age: 45},
    {id: "2", name: "Francine", age: 45},
    {id: "3", name: "Hayley", age: 18},
    {id: "4", name: "Steve", age: 14},
    {id: "5", name: "Roger", age: 1023},
    {id: "6", name: "Klaus", age: 30},
  ]
  const [family, setFamily] = useState(obj);

  //FlatList le key n'est plus obligatoire mais il faudrai preciser l'id
  const  renderItem = ({item}) => {
    return(
      <View style={styles.viewList} >
      <Text style={styles.textView}>
        <Text style={styles.textViewBold}>Nom: </Text> 
        {item.name} 
      </Text>
      <Text style={styles.textView}>
        <Text style={styles.textViewBold} >Age: </Text> 
        {item.age} 
      </Text>
    </View>
    )
  }



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
      {/* Les objets en React Native */}
      <View style= {styles.familyWrapper}>
        {/* <ScrollView>
        {
          family.map(member => {
            return(
              <View key={member.id} style={styles.viewList} >
                <Text style={styles.textView}>
                  <Text style={styles.textViewBold}>Nom: </Text> 
                  {member.name} 
                </Text>
                <Text style={styles.textView}>
                  <Text style={styles.textViewBold} >Age: </Text> 
                  {member.age} 
                </Text>
              </View>
            )
          })
        }
        </ScrollView> */}
        <FlatList 
          data={family}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

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
    },
    familyWrapper: {
      padding: 20,
      backgroundColor: 'orange',
    },
    viewList: {
      marginTop: 40,
      backgroundColor: "purple",
      padding: 20,
    },
    textView: {
      color: 'white',
      fontSize: 25
    },
    textViewBold: {
      fontWeight: 'bold',
      fontSize: 20
    }
})