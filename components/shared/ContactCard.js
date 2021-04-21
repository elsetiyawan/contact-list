import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';

const ContactCard = props => {
  return (
    <TouchableOpacity>
      <View style={styles.contactWrapper}>
        <View>
          <Avatar
            overlayContainerStyle={{
              backgroundColor: 'blue',
              borderRadius: 10,
            }}
            size="medium"
            source={{
              uri: props.photo
                ? props.photo
                : 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
            }}
          />
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
  contactWrapper: {
    backgroundColor: '#fff',
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
