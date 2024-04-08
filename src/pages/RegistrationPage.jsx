import {
    AuthTitle,
    Button,
    Input,
    Label,
    LinkTo,
    LoginContainer,
    ImgWrapp,
    ImgBottle,
    Form,
    IconConteiner,
    ErrorMessage,
    ButtonGoogle,
} from './LoginPage/LoginPage.styled';
import { HiOutlineEyeSlash } from 'react-icons/hi2';
import { PiEyeLight } from 'react-icons/pi';
import { ButtonPassword } from './LoginPage/LoginPage.styled';
import { useVisiblePassword } from '../hooks/useVisiblePassword';
import bottleImg from './LoginPage/image/bottleAuth.png';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { signUp } from '../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { FcGoogle } from 'react-icons/fc';
// import ModalUser from './LoginPage/ModalUser/ModalUser';
// import { ModalContext } from '../context';
// import { useContext } from 'react';

const Registration = () => {
    const bottle = bottleImg;
    const { handleShowPassword, toggleIcon, type } = useVisiblePassword();
    const dispatch = useDispatch();
    // const { openModal } = useContext(ModalContext);
    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string()
            .min(8, 'Password should be of minimum 8 characters length')
            .max(64, 'Password should be of max 64 characters length')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Passwords does not match'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: SignupSchema,
        onSubmit: ({ email, password }, { resetForm }) => {
            dispatch(signUp({ email: email, password: password }));
            // openModal(<>
            // <ModalUser/>
            // </>);
            resetForm();
        },
    });

    const handleLogInWithPopUp = () => {
        window.location.assign(
            'https://smart-foxes-backend-watertracker.onrender.com/api/auth/google'
        );
    };

    // const handleLogInWithPopUp = () => {
    //   window.location.assign('http://localhost:3000/api/auth/google');
    // };

    return (
    
        <LoginContainer>
            <Form onSubmit={formik.handleSubmit}>
                <AuthTitle>Sing Up</AuthTitle>
                <Label>
                    Enter your email
                    <Input
                        placeholder="E-mail"
                        name="email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        autoComplete="off"
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && formik.errors.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <ErrorMessage>{formik.errors.email}</ErrorMessage>
                    )}
                </Label>
                <Label>
                    Enter your password
                    <IconConteiner>
                        <Input
                            placeholder="Password"
                            name="password"
                            type={type}
                            autoComplete="off"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && formik.errors.password}
                        />
                        <ButtonPassword type="button" onClick={handleShowPassword}>
                            {toggleIcon ? (
                                <HiOutlineEyeSlash size={16} color="#407BFF" />
                            ) : (
                                <PiEyeLight size={16} color="#407BFF" />
                            )}
                        </ButtonPassword>
                    </IconConteiner>
                    {formik.touched.password && formik.errors.password && (
                        <ErrorMessage>{formik.errors.password}</ErrorMessage>
                    )}
                </Label>
                <Label>
                    Repeat password
                    <IconConteiner>
                        <Input
                            placeholder="Repeat password"
                            name="confirmPassword"
                            type={type}
                            autoComplete="off"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        />
                        <ButtonPassword type="button" onClick={handleShowPassword}>
                            {toggleIcon ? (
                                <HiOutlineEyeSlash size={16} color="#407BFF" />
                            ) : (
                                <PiEyeLight size={16} color="#407BFF" />
                            )}
                        </ButtonPassword>
                    </IconConteiner>
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <ErrorMessage>{formik.errors.confirmPassword}</ErrorMessage>
                    )}
                </Label>
                <Button type="submit">Sing Up</Button>
                <ButtonGoogle
                    name="google-auth"
                    onClick={handleLogInWithPopUp}
                    type="button"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 15,
                    }}
                >
                    <FcGoogle style={{ width: 25, height: 25 }} /> Google
                </ButtonGoogle>
                <LinkTo to="/signin">Sing in</LinkTo>
            </Form>
            <ImgWrapp>
                <ImgBottle src={bottle} alt="bottle" />
            </ImgWrapp>
        </LoginContainer>
       
       
    );
};

export default Registration;
