import React, {useState, useEffect} from 'react';
import {Formik} from 'formik';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar, Button, Input} from 'react-native-elements';
import {isUrlValid} from '../../helpers/Helper';

const ContactForm = props => {
  return (
    <Formik
      enableReinitialize
      initialValues={{...props.initialData}}
      onSubmit={props.onFormSubmit}>
      {({values, handleChange, handleSubmit}) => (
        <View style={styles.formWrapper}>
          <Avatar
            size="large"
            source={{
              uri: isUrlValid(props.initialData.photo)
                ? props.initialData.photo
                : 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
            }}
          />
          <Input
            label="First Name"
            value={values.firstName}
            onChangeText={handleChange('firstName')}
          />
          <Input
            label="Last Name"
            value={values.lastName}
            onChangeText={handleChange('lastName')}
          />
          <Input
            label="Age"
            value={values?.age?.toString()}
            onChangeText={handleChange('age')}
            keyboardType="numeric"
          />
          <View style={{width: '90%'}}>
            <Button
              buttonStyle={styles.buttonStyle}
              title="Save"
              onPress={handleSubmit}
            />
            {/* {props.mode === 'edit' && (
              <Button
                buttonStyle={styles.deleteButtonStyle}
                title="Delete"
                onPress={props.onDelete}
              />
            )} */}
          </View>
        </View>
      )}
    </Formik>
  );
};

export default ContactForm;

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
  formWrapper: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  buttonStyle: {
    width: '100%',
    marginBottom: 20,
  },
  deleteButtonStyle: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: 'red',
  },
});
