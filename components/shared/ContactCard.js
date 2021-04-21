import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';

const ContactCard = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.contactWrapper}>
        <View>
          <Avatar
            overlayContainerStyle={{
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
