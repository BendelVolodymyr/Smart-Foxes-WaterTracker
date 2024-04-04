import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your full name'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Please enter your email address'),
  currentPassword: Yup.string(),
  newPassword: Yup.string(),
  repeatPassword: Yup.string().oneOf(
    [Yup.ref('newPassword'), null],
    'Passwords must match'
  ),
});

export default validationSchema;
