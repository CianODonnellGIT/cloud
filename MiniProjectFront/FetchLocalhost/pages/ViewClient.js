// import { Button, Text, View, StyleSheet } from 'react-native'
// import {useState} from 'react'
// import { Card } from 'react-native-elements';
// // import NROK_URL from '../env'

// const FetchScreen = ({ navigation }) => {
// const[allProducts, setProducts]= useState([])

//   const callAPI = async () => {
//     try {
//       const res = await fetch(
//         `https://c965-193-1-57-1.ngrok-free.app`,
//         {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             "ngrok-skip-browser-warning": "69420" // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
//           },
         
//         }
//       )
//       const data = await res.json()
//       console.log(data)
//       setProducts(data.AlltheProducts)
//     } catch (err) {
//       console.log(err)
//     }
//   }
  
//   return (
//   <View>
//     {allProducts.map((item)=>
//       <Card style={styles.container}>
//         <Text>id: {item.ourId}</Text>
//         <Text>name: {item.name}</Text>
//         <Text>price: {item.price}</Text>
//       </Card>
//       )}
//     <Button
//       style={styles.buttonStyle}
//       title="Load Products" onPress={async () => callAPI()}
//     />
//   </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 40,
//     backgroundColor: '#ecf0f1',
//   },
//   buttonStyle: {
//     flex: 1,
//     alignSelf: 'stretch',
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#007aff',
//     marginLeft: 5,
//     marginRight:5
//   },
// });

//  export default FetchScreen 
import { Button, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import { Card } from 'react-native-elements';

const FetchScreen = ({ navigation }) => {
  const [allProducts, setProducts] = useState([]);

  const callAPI = async () => {
    try {
      const res = await fetch(`https://a401-193-1-57-1.ngrok-free.app`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': '69420',
        },
      });
      const data = await res.json();
      console.log(data);
      setProducts(data.AlltheProducts);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView>
      <Text style={styles.text}>View Client's</Text> 
      
      {allProducts.map((item) => (
        <Card style={styles.container}>
          <Image source={{ uri: item.imageUri }} style={styles.image} />
          <Text>id: {item.ourId}</Text>
          <Text>name: {item.name}</Text>
          <Text>age: {item.age}</Text>
          <Text>Gender: {item.gender}</Text>
        </Card>
      ))}
      <Button
        style={styles.buttonStyle}
        title="View Clients"
        onPress={async () => callAPI()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
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
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});

export default FetchScreen;
