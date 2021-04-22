import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ContactCard} from '../../shared';
import Api from '../../../helpers/Api';
import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading, setContactList} from '../../../store/reducer/Global';

const Home = props => {
  const api = new Api();
  const global = useSelector(state => state.global);
  const dispatch = useDispatch();
  const [dl, setDl] = useState(global.contactList);
  const navigation = useNavigation();

  const handleCardPress = id =>
    navigation.navigate('ContactDetail', {userId: id, state: 'edit'});

  useEffect(() => {
    dispatch(setLoading(true));
    api
      .getAllContact()
      .then(res => {
        dispatch(setContactList(res.data.data));
      })
      .catch(err => console.log(err))
      .finally(() => dispatch(setLoading(false)));
  }, []);

  useEffect(() => {
    setDl(global.contactList);
  }, [global.contactList]);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.contactTitle}>Contact List</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.contactDetail}
          onPress={() => navigation.navigate('ContactDetail', {state: 'add'})}>
          <Text style={styles.addContact}>Add contact</Text>
        </TouchableOpacity>
      </View>
      {global.loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <View style={{marginBottom: 100}}>
          <FlatList
            data={dl}
            renderItem={({item}) => (
              <ContactCard {...item} onPress={() => handleCardPress(item.id)} />
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#D5D1C3',
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactDetail: {
    backgroundColor: '#B1AB94',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#F2F0E6',
    alignItems: 'center',
  },
  addContact: {
    fontWeight: 'bold',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
