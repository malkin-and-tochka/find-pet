import style from './login.module.css'
import {Form, Formik} from "formik";
import {FormInput} from "../addAdvent/formAndResult/adventForm/adventForm";

const Login = () => {
    const submit = (values) => {
        alert(JSON.stringify(values))
    }
    return (
        <div className={style.loginWrapper}>
            <Formik
                initialValues={{username: '', email: '', key: ''}}
                onSubmit={submit}>
                {({handleChange}) =>
                    <Form className={style.FormWrapper}>
                        {/*<p>Entrance</p>*/}
                        <FormInput name={'username'}
                                   placeholder={"your name"}
                                   text={"Username"}
                                   onChange={handleChange}/>
                        <FormInput name={'email'}
                                   placeholder={"email"}
                                   text={"Email"}
                                   onChange={handleChange}/>
                        <button>
                            Send key
                        </button>
                        <FormInput name={'key'}
                                   placeholder={"key from the email"}
                                   text={"Key"}
                                   onChange={handleChange}/>
                        <div className={style.buttonRow}>
                            <button onClick={submit}>
                                login
                            </button>
                            <button className={style.register}>
                                Register
                            </button>
                        </div>
                    </Form>
                }
            </Formik>
        </div>
    );
};

export default Login;