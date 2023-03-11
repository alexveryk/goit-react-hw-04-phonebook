import { Formik } from 'formik';
import {
  PhoneForm,
  FormLabel,
  FormField,
  BtnForm,
  ErrorMessageForm,
} from './PhoneForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string().required('Required'),
});

export const PhonebookForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={PhonebookSchema}
      onSubmit={(values, actions) => {
        onSubmit({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <PhoneForm>
        <FormLabel>
          Name
          <FormField
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></FormField>
          <ErrorMessageForm name="name" component="div" />
        </FormLabel>
        <FormLabel>
          Number
          <FormField
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></FormField>
          <ErrorMessageForm name="number" component="div" />
        </FormLabel>
        <BtnForm type="submit">Add contact</BtnForm>
      </PhoneForm>
    </Formik>
  );
};

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
