import { useDispatch,useSelector } from 'react-redux';
import { Formik, Field } from 'formik';

import * as yup from 'yup';

import {
  FormField,
  Form,
  ErrorMessage,
  ButtonWrapForm,
} from './ContactForm.styled';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selector';


const contactSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required(),
  number: yup
    .string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const isIncludes = ({ name, number }) => {
    const nameUpdate = name?name.toLowerCase().trim():'';
    const numberUpdate = number?number.trim():'';

    const includes = contacts.items.find(
      contact =>
        (contact.name && contact.name.toLowerCase().trim() === nameUpdate) ||
        (contact.number && contact.number.trim() === numberUpdate)
    );
    return Boolean(includes);
  };
  
  const addContactPlus = ({ name, number }) => {
    if (isIncludes({ name, number })) {
      return alert(`${name}: is already in contacts`);
    }
    dispatch(addContact({ name, number }));
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        addContactPlus({ ...values });
        actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <FormField>
          Name
          <Field
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="div" />
        </FormField>
        <ButtonWrapForm type="submit">Add contact</ButtonWrapForm>
      </Form>
    </Formik>
  );
};


