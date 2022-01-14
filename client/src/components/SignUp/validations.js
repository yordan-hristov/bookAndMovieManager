import * as Yup from 'yup';


export const formSchema = Yup.object().shape({
    fullName: Yup.string()
        .required('Full Name is required!'),
    email: Yup.string()
        .required('Email is required!')
        .email('Email is not valid'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password length should be at least 6 characters!'),
    repeatPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password')], 'Passwords must match!'),
})