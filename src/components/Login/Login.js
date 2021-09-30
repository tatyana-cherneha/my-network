import './Login.scss'
import { reduxForm, Field }from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Input} from "../common/FormControls/FormControls";

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
    return (
        <div className='form'>
            <form onSubmit={props.handleSubmit}>
                <div className='form__control'>
                    <Field placeholder='Input login' name="login" type="text" component={Input}
                           validate={[requiredField, maxLength30]} />
                </div>
                <div className='form__control'>
                    <Field placeholder='Input password' name="password" type="password" component={Input} />
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

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>

            <ReduxLoginForm onSubmit={onSubmit} />

        </div>
    )
}
export default Login
