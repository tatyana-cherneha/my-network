import './Login.scss'
import { reduxForm }from "redux-form";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {createField, Input} from "../common/FormControls/FormControls";

// const maxLength30 = maxLengthCreator(30);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                {createField('Email', 'email', [requiredField], Input)}
                {createField('Password', 'password', [requiredField], Input, {type: 'password'})}

                {/*<div className='form__control'>*/}
                {/*    <Field placeholder='Input email' name="email" type="text" component={Input}*/}
                {/*           validate={[requiredField, maxLength30]} />*/}
                {/*</div>*/}
                {/*<div className='form__control'>*/}
                {/*    <Field placeholder='Input password' name="password" type="password" component={Input} />*/}
                {/*</div>*/}
                {
                    error  && <div className='error'><span>{error}</span></div>
                }

                <div className='d-flex'>
                    <div className='form__checkbox'>
                        {/*<Field type="checkbox" component={Input} name="rememberMe" />*/}
                        {/*<span>Remember me</span>*/}
                        {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'Remember me')}
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
