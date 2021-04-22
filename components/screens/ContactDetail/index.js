import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Api from '../../../helpers/Api';
import {ContactForm} from '../../shared';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setContactList, setLoading} from '../../../store/reducer/Global';

const ContactDetail = props => {
  const api = new Api();
  const dispatch = useDispatch();
  const navigation = new useNavigation();
  const [mode] = useState(props.route.params.state);
  const [initialData, setInitialData] = useState({});
  useEffect(() => {
    if (mode === 'edit') {
      api
        .getSingleContact(props.route.params.userId)
        .then(res => setInitialData(res.data.data));
    }
  }, []);

  const handleSubmit = async values => {
    dispatch(setLoading(true));
    delete values['id'];
    let userSaved;
    try {
      if (mode === 'edit') {
        userSaved = await api.updateContact(props.route.params.userId, values);
      } else {
        userSaved = await api.createContact(values);
      }

      const allContacts = await api.getAllContact().then(res => res.data.data);
      dispatch(setContactList(allContacts));
      dispatch(setLoading(false));
      navigation.navigate('Home');
    } catch (err) {
      alert(err.response.data.message);
      dispatch(setLoading(false));
    }
  };

  const handleDelete = () => {
    api
      .deleteContact(props.route.params.userId)
      .then(res => console.log(res))
      .catch(err => alert(err.response.data.message));
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.contactTitle}>{mode} Contact</Text>
      </View>
      <ContactForm
        initialData={initialData}
        onFormSubmit={handleSubmit}
        onDelete={handleDelete}
        mode={mode}
      />
    </View>
  );
};

export default ContactDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D5D1C3',
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginBottom: 10,
  },
});
