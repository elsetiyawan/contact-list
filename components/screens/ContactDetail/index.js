import React from 'react';
import {useEffect} from 'react';
import {Text, View} from 'react-native';

const ContactDetail = props => {
  useEffect(() => {
    console.log('dari add =>  ', props.route.params.userId);
  }, [props]);
  return (
    <View>
      <Text>Add Contact {props.route.params.userId}</Text>
    </View>
  );
};

export default ContactDetail;
