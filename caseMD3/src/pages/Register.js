import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Register() {
    let navigate = useNavigate();
    return (
        <>
            <h1>Register</h1>
            <div className="container">
                <Formik
                    initialValues={
                        {
                            name: '',
                            username: '',
                            password: '',
                            dob: '',
                        }
                    }
                    onSubmit={values => {
                        axios.post("http://localhost:3000/users/register", values).then((res) => {
                            alert('Đăng ký thanh công');
                            navigate("/login")
                        })
                    }}
                >
                    <Form>
                        <h4 className={'login'}>Name: </h4>
                        <Field className={'login'} name={'name'}/>
                        <h4 className={'login'}>User Name: </h4>
                        <Field className={'login'} name={'username'}/>
                        <h4 className={'login'}>Password: </h4>
                        <Field className={'login'} name={'password'}/>
                        <h4 className={'login'}>Dob: </h4>
                        <Field className={'login'} name={'dob'}/>
                        <button className={'login-btn'}>Register</button>
                    </Form>
                </Formik>
            </div>
        </>
    );
}

export default Register;