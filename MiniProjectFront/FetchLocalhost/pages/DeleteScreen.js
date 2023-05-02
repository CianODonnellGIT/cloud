import { Button, Text, TextInput, View, StyleSheet } from 'react-native'
import {useState} from 'react'

const Delete = ({ navigation }) => {
    const [ourId, deleteId] = useState('')
  
    const deleteAPI = async () => {
      try {
        const res = await fetch(
          `https://a401-193-1-57-1.ngrok-free.app/deleteSpecificProduct`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              "ngrok-skip-browser-warning": "69420" // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
            },
          // body: JSON.stringify( { testData: 'Test data sent to server' } ) // Need to use POST to send body
           body: JSON.stringify({id: ourId}) 
          }
        )
        const data = await res.json()
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    return (
    <View>  
      <Text style={styles.text}>Delete Client </Text>   
      <TextInput
          style={styles.input}
          placeholder="Client ID to delete"
          onChangeText={deleteId}
          defaultValue=''
        />      
        <Button
        title="Delete Client ID" onPress={async () => deleteAPI()}
      />  
      </View>  
      )
  };

  const styles = StyleSheet.create({
    input: {
      color:'white',
      fontSize: 20,
      backgroundColor: 'red',
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    text: {
      textAlign: 'center',
      fontSize: 35,
      fontWeight: 'bold',
      color: '#000000',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 5,
    },
  });

  export default Delete