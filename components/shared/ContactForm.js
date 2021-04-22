import React, {useState, useEffect} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar, Button, Input} from 'react-native-elements';
import {isUrlValid} from '../../helpers/Helper';

const DetailContactSchema = Yup.object().shape({
  firstName: Yup.string().min(3, 'Too short!').required(),
  lastName: Yup.string().min(3, 'Too short!').required(),
  age: Yup.number().max(200, 'Too old!').required(),
});

const ContactForm = props => {
  return (
    <Formik
      enableReinitialize
      validationSchema={DetailContactSchema}
      initialValues={{...props.initialData}}
      onSubmit={props.onFormSubmit}>
      {({values, handleChange, handleSubmit, errors}) => (
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
            errorMessage={errors.firstName}
          />
          <Input
            label="Last Name"
            value={values.lastName}
            onChangeText={handleChange('lastName')}
            errorMessage={errors.lastName}
          />

          <Input
            label="Age"
            value={values?.age?.toString()}
            onChangeText={handleChange('age')}
            keyboardType="numeric"
            errorMessage={errors.age}
          />

          <View style={{width: '90%'}}>
            <Button
              buttonStyle={styles.buttonStyle}
              title="Save"
              onPress={handleSubmit}
              disabled={Object.keys(errors).length !== 0 || !values.firstName}
              disabledStyle={{backgroundColor: 'grey'}}
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
