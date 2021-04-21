import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Api from '../../../helpers/Api';
import {ContactForm} from '../../shared';
import {useNavigation} from '@react-navigation/native';

const ContactDetail = props => {
  const api = new Api();
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

  const onFormSubmit = values => {
    if (mode === 'edit') {
      delete values['id'];
      api
        .updateContact(props.route.params.userId, values)
        .then(() => navigation.navigate('Home'));
    } else {
      api
        .createContact(values)
        .then(() => navigation.navigate('Home'))
        .catch(err => console.log(err));
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.contactTitle}>{mode} Contact</Text>
      </View>
      <ContactForm initialData={initialData} onFormSubmit={onFormSubmit} />
    </View>
  );
};

export default ContactDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E8EAED',
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginBottom: 10,
  },
});
