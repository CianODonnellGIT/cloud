import { Button, ScrollView, StyleSheet, Pressable, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable
        style={[styles.button, styles.allButton]}
        onPress={() => navigation.navigate('Fetch')}
      >
        <Text style={styles.text}>Get Client List</Text>
      </Pressable>
    
      <Pressable
        style={[styles.button, styles.addButton]}
        onPress={() => navigation.navigate('Add')}
      >
        <Text style={styles.text}>Add Client</Text>
      </Pressable>
    
     

      <Pressable
        style={[styles.button, styles.updateButton]}
        onPress={() => navigation.navigate('Edit')}
      >
        <Text style={styles.text}>Edit Product</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.delButton]}
        onPress={() => navigation.navigate('Delete')}
      >
        <Text style={styles.text}>Delete Screen</Text>
      </Pressable>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 20,
    textAlign: 'center',
    flex: 1, 
    width: '90%',
    margin: 15,
    borderRadius: 20,
  },
  allButton: {
    backgroundColor: '#007bff',
    borderWidth: 2,
  },
  text: {
    padding:60,
    paddingRight:30,
    color: 'white',
    fontSize: 30
  },
  addButton: {
    backgroundColor: '#28a745',
    borderWidth: 1,
    borderWidth: 2,
  },
  specButton: {
    backgroundColor: '#dc3545',
    borderWidth: 1,
    borderWidth: 2,

  },
  updateButton: {
    backgroundColor: '#6c757d',
    borderWidth: 1,
    borderWidth: 2,
  },
  delButton: {
    backgroundColor: '#c70000',
    borderWidth: 1,
    borderWidth: 2,
  },
});

export default HomeScreen;
