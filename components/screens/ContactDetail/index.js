import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ContactForm} from '../../shared';

const ContactDetail = props => {
  const [mode] = useState(props.route.params.state);
  const [initialData, setInitialData] = useState({
    firstName: '',
    lastName: '',
    age: null,
  });
  const onFormSubmit = values => {
    console.log(values);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.contactTitle}>{mode} Contact</Text>
      </View>
      <ContactForm initialData onFormSubmit={onFormSubmit} />
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
