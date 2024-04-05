import {
    LoginContainer,
    AuthTitle,
    Button,
    LinkTo,
    Label,
    Input,
    ButtonPassword,
    ImgWrapp,
    ImgBottle,
    Form,
    ErrorMessage,
    IconConteiner,
    ButtonGoogle,
} from './LoginPage.styled';
import { HiOutlineEyeSlash } from 'react-icons/hi2';
import { PiEyeLight } from 'react-icons/pi';
import { useVisiblePassword } from '../../hooks/useVisiblePassword';
import bottleImg from './image/bottleAuth.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/operations';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
    const { handleShowPassword, toggleIcon, type } = useVisiblePassword();
    const bottle = bottleImg;
    const dispatch = useDispatch();

    const handleLogInWithPopUp = () => {
        window.location.assign(
            'https://smart-foxes-backend-watertracker.onrender.com/api/auth/google'
        );
    };

    // const handleLogInWithPopUp = () => {
    //   window.location.assign('http://localhost:3000/api/auth/google');
    // };

    const SigninSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string()
            .min(8, 'Password should be of minimum 8 characters length')
            .max(64, 'Password should be of max 64 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: SigninSchema,
        onSubmit: ({ email, password }, { resetForm }) => {
            dispatch(signIn({ email: email, password: password }));
            resetForm();
        },
    });

    return (
        <LoginContainer>
            <Form onSubmit={formik.handleSubmit}>
                <AuthTitle>Sing In</AuthTitle>
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
                <Button type="submit">Sing In</Button>
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
                <LinkTo to="/signup">Sing up</LinkTo>
                <LinkTo>Forgot Password</LinkTo>
            </Form>
            <ImgWrapp>
                <ImgBottle src={bottle} alt="bottle" />
            </ImgWrapp>
        </LoginContainer>
    );
};

export default LoginPage;
