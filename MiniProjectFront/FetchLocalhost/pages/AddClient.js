import { Button, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, View, Text } from 'react-native'
import {useState, useEffect} from 'react'
import ImgPickerScreen from '../components/ImagePicker'
import { Picker } from '@react-native-picker/picker';

const AddScreen = ({ navigation }) => {
  const [nameId, setName] = useState()
  const [gender, setGender] = useState('Choose Gender')
  const [age, setAge] = useState('')
  const [imageUri, setImageUri] = useState('') // set a default value for imageUri

  const [showPicker, setShowPicker] = useState(false);

  const handlePickerPress = () => {
    setShowPicker(true);
  };

  const handleTakePicture = async (result) => {
    setImageUri(result.uri)
  };
  const handlePickerChange = (itemValue, itemIndex) => {
    onPress = setGender(itemValue);
    setShowPicker(false);
  };

  const callAPI = async () => {
    try {
      const res = await fetch(
        `http://54.147.94.149:3000/addProduct`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420"
          },
          body: JSON.stringify( { 
            name: nameId, 
            age:age,
            gender:gender,
            imageUri: imageUri || '' // check if imageUri is undefined or empty, and set a default value of ''
          }) 
        }
      )
      const data = await res.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <ScrollView>
      <Text style={styles.text}>Add Client </Text>  
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        onChangeText={setName}
        defaultValue=''
      />      
      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        keyboardType="numeric"
        keyboardAppearance="light"
        returnKeyType="done"
        onChangeText={setAge}
        defaultValue=''
       />

      <TouchableOpacity onPress={handlePickerPress}>
        <View style={styles.picker}>
          <Text>{gender}</Text>
        </View>
      </TouchableOpacity>
      {showPicker && (
      <Picker
        gender={gender}
        onValueChange={handlePickerChange}
      >
      <Picker.Item label="Chosse Gender" value= '' />
      <Picker.Item label="Male" value= 'Male' />
      <Picker.Item label="Female" value="Female" />
      <Picker.Item label="Other" value="Other" />
      </Picker>
      )}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <Button title="Add client" onPress={async () => callAPI()} />
      <ImgPickerScreen setImageUri={setImageUri} />



    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: ''
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  selection: {
    textAlign: 'center',
    alignItems: 'center',
    width: 105
  },
  picker: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 390,
    margin:12,
    padding: 10,
    borderRadius: 5,
    
    borderLeftColor: 'grey'
  },
});
export default AddScreen
