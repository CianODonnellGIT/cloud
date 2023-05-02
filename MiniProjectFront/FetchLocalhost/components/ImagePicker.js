// // import React, { useState } from 'react';
// // import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
// // import * as ImagePicker from 'expo-image-picker';
// // import Constants from 'expo-constants';
// // import * as Permissions from 'expo-permissions';

// // export const ImgPickerScreen = ({ onImageSelected }) => {
// //   const [image, setImage] = useState(null);

// //   const askPermission = async () => {
// //     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
// //     if (status !== 'granted') {
// //       Alert.alert('Permission denied!');
// //     }
// //   };

// //   const takePhoto = async () => {
// //     await askPermission();
// //     const result = await ImagePicker.launchCameraAsync({
// //       allowsEditing: true,
// //       aspect: [4, 3],
// //     });

// //     if (!result.cancelled) {
// //       setImage(result.uri);
// //       navigation.navigate('Add', { image: result.uri });
// //     }
// //   };

// //   const pickImage = async () => {
// //     await askPermission();
// //     const result = await ImagePicker.launchImageLibraryAsync({
// //       allowsEditing: true,
// //       aspect: [4, 3],
// //     });

// //     if (!result.cancelled) {
// //       setImage(result.uri);
// //       navigation.navigate('Add', { image: result.uri });
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Select an image:</Text>
// //       <View style={styles.buttonContainer}>
// //         <Button title="Take a Photo" onPress={takePhoto} />
// //       </View>
// //       <View style={styles.buttonContainer}>
// //         <Button title="Pick an Image from Gallery" onPress={pickImage} />
// //       </View>
// //       {image && <Image source={{ uri: image }} style={styles.image} />}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     paddingTop: Constants.statusBarHeight,
// //     backgroundColor: '#ecf0f1',
// //     padding: 8,
// //   },
// //   title: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 16,
// //   },
// //   buttonContainer: {
// //     margin: 8,
// //   },
// //   image: {
// //     marginTop: 16,
// //     width: 200,
// //     height: 200,
// //   },
// // });
// // export default ImgPickerScreen;
// import React, { useState } from 'react';
// import { Button, Image, View, Platform } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import Constants from 'expo-constants';

// const ImgPicker = ({ setImageUri }) => {
//   const [image, setImage] = useState(null);

//   const getPermissionAsync = async () => {
//     if (Constants.platform.ios) {
//       const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
//       if (status !== 'granted') {
//         alert('Sorry, we need camera roll permissions to make this work!');
//       }
//     }
//   };

//   const pickImage = async () => {
//     await getPermissionAsync();
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       setImage(result.uri);
//       setImageUri(result.uri);
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && (
//         <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
//       )}
//     </View>
//   );
// };

// export default ImgPicker;

import React from 'react';
import { Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImgPickerScreen = ({ setImageUri }) => {
  const takePicture = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  return <Button title="Take Client's Picture" onPress={takePicture} />;
};

export default ImgPickerScreen;

