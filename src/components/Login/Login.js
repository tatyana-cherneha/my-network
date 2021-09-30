import './Login.scss'
import { reduxForm, Field }from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
// import {Input} from "../common/FormControls/FormControls";

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
    return (
        <div className='form'>
            <form onSubmit={props.handleSubmit}>
                <div className='form__control'>
                    <Field placeholder='Input email' name="email" type="text" component="input"
                           validate={[requiredField, maxLength30]} />
                </div>
                <div className='form__control'>
                    <Field placeholder='Input password' name="password" type="password" component="input" />
                </div>
                <div className='d-flex'>
                    <div className='form__checkbox'>
                        <Field type="checkbox" component="input" name="rememberMe" />
                        <span>Remember me</span>
                    </div>
                    <div className='form__button'>
                        <button type="submit">Log in</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

let ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
        //console.log(formData)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} />

        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)
