import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please enter your full name'),
    email: Yup.string().email('Invalid email address').required('Please enter your email address'),
    currentPassword: Yup.string().required('Please enter your current password'),
    newPassword: Yup.string().required('Please enter a new password'),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Please repeat your new password'),
});

export default validationSchema;
