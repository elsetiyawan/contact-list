import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-elements';
import {ContactCard} from '../../shared';

const datalist = [
  {
    id: '93ad6070-c92b-11e8-b02f-cbfa15db428b',
    firstName: 'Bilbo',
    lastName: 'Baggins',
    age: 111,
    photo:
      'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
  },
  {
    id: 'b3abd640-c92b-11e8-b02f-cbfa15db428b',
    firstName: 'Luke',
    lastName: 'Skywalker',
    age: 20,
    photo: 'N/A',
  },
  {
    firstName: 'something',
    lastName: 'asd',
    age: 12,
    id: 'ddd7f520-a23b-11eb-8e5b-e798ccb4bfd6',
    photo: 'N/A',
  },
  {
    firstName: 'qqq',
    lastName: 'aaa',
    age: 12,
    id: '97ddb900-a23c-11eb-8e5b-e798ccb4bfd6',
    photo: 'N/A',
  },
  {
    firstName: 'Johnny',
    lastName: 'Walker',
    age: 41,
    photo: 'https://bit.ly/3gn4LCJ',
    id: '1aa41dc0-a23d-11eb-8e5b-e798ccb4bfd6',
  },
  {
    firstName: 'Thedeleteendpoint',
    lastName: 'notworking',
    age: 1,
    id: '409b5ac0-a23d-11eb-8e5b-e798ccb4bfd6',
    photo: 'N/A',
  },
  {
    firstName: 'AmIRight',
    lastName: 'orJustOnlyMe',
    age: 2,
    id: '4c99e170-a23d-11eb-8e5b-e798ccb4bfd6',
    photo: 'N/A',
  },
  {
    firstName: 'tes',
    lastName: 'tes',
    age: 1,
    photo: 'tes',
    id: '509726c0-a23d-11eb-8e5b-e798ccb4bfd6',
  },
  {
    firstName: 'DeleteEndpoinPadaBisaGak',
    lastName: 'TandaTanya',
    age: 1,
    id: '8063eff0-a23d-11eb-8e5b-e798ccb4bfd6',
    photo: 'N/A',
  },
  {
    firstName: 'aaa',
    lastName: 'xccc',
    age: 22,
    id: '063523b0-a23e-11eb-8e5b-e798ccb4bfd6',
    photo: 'N/A',
  },
];
const Home = props => {
  const navigation = useNavigation();
  const handleCardPress = id =>
    navigation.navigate('ContactDetail', {userId: id, state: 'edit'});

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.contactTitle}>Contact List</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.contactDetail}
          onPress={() => navigation.navigate('ContactDetail', {state: 'add'})}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={datalist}
          renderItem={({item}) => (
            <ContactCard {...item} onPress={() => handleCardPress(item.id)} />
          )}
        />
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
  contactDetail: {
    backgroundColor: 'green',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#fff',
    alignItems: 'center',
  },
});

export default Home;
