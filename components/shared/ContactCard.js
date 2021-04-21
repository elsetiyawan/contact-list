import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import {isUrlValid} from '../../helpers/Helper';

const ContactCard = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.contactWrapper}>
        <View>
          {isUrlValid(props.photo) ? (
            <Avatar
              overlayContainerStyle={{
                borderRadius: 10,
              }}
              size="medium"
              source={{
                uri: props.photo,
              }}
            />
          ) : (
            <Avatar
              overlayContainerStyle={{
                borderRadius: 10,
                backgroundColor: '#D5D1C3',
              }}
              size="medium"
              title="MD"
            />
          )}
        </View>
        <View style={styles.contactDetail}>
          <Text style={styles.contactText}>
            {props.firstName} {props.lastName}
          </Text>
          <Text style={styles.contactText}>{props.age}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contactWrapper: {
    backgroundColor: '#B1AB94',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    flexDirection: 'row',
  },
  contactDetail: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  contactText: {
    fontSize: 18,
  },
});

export default ContactCard;
