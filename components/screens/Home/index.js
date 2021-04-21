import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.contactTitle}>Contact List</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.addContact}
          onPress={() => navigation.navigate('AddContact', {userId: 1})}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <View style={styles.constactWrapper}>
            <Text>Contact No 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.constactWrapper}>
            <Text>Contact No 1</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E8EAED',
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addContact: {
    backgroundColor: 'green',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#fff',
    alignItems: 'center',
  },
  constactWrapper: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
  },
});

export default Home;
