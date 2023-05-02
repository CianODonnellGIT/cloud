// import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddProduct from './pages/AddClient'
import HomeScreen from './pages/Home'
import FetchScreen from './pages/ViewClient'
import EditScreen from './pages/EditPage'
import ImgPickerScreen from './components/ImagePicker'
import DeleteScreen from './pages/DeleteScreen'

const Stack = createNativeStackNavigator()

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Fetch"
          component={FetchScreen}
        />
        <Stack.Screen
          name="Add"
          component={AddProduct}
        />
        <Stack.Screen
        name="Edit"
        component={EditScreen}
        />
         <Stack.Screen
        name="Delete"
        component={DeleteScreen}
        />
        <Stack.Screen 
        name="ImgPicker" 
        component={ImgPickerScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

