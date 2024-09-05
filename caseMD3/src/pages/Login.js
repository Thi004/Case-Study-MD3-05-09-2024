import '../style/Login.css'
import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useContext} from "react";
import {MyContext} from "../components/MyContext";

function Login() {
    let navigate = useNavigate();
    let {setCurrentUser} = useContext(MyContext);
    return (
        <>
            <h1>Login</h1>
            <div className="container">
                <Formik
                    initialValues={
                        {
                            username: '',
                            password: ''
                        }
                    }
                    onSubmit={values => {
                        let username = values.username;
                        let password = values.password;
                        if (username === 'Admin' && password === 'admin') {
                            alert('Đăng nhập thành công');
                            navigate("/admin")
                        } else {
                        axios.post("http://localhost:3000/users/login", values).then((res) => {
                            alert('Đăng nhập thành công');
                            setCurrentUser(res.data)
                            navigate("/users")
                        }).catch(e => {
                            alert("Sai tài khoản, mật khẩu")
                        })
                    }}}
                >
                    <Form>
                        <h4 className={'login'}>User Name: </h4>
                        <Field className={'login'} name={'username'}/>
                        <h4 className={'login'}>Password: </h4>
                        <Field className={'login'} name={'password'}/>
                        <button className={'login-btn'}>Login</button>
                        <button className={'login-btn'}><Link className={'link-btn'}
                                                              to={'/register'}>Register</Link></button>
                    </Form>
                </Formik>
            </div>
        </>
    );
}

export default Login;