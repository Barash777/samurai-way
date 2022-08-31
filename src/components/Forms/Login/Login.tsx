import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from '../FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';
import {connect} from 'react-redux';
import {loginTC as login, logoutTC as logout} from '../../../redux/authReducer';
import {AppStateType} from '../../../redux/redux-store';
import {Navigate} from 'react-router-dom';


const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        // console.log(formData, props)
        // debugger
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <h5>Login</h5>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
};

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    // const {handleSubmit} = props
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                name="email"
                component={Input}
                type="text"
                placeholder={'email'}
                validate={[required]}
            />
        </div>
        <div>
            <Field
                name="password"
                component={Input}
                type="password"
                placeholder={'password'}
                validate={[required]}
            />
        </div>
        <div>
            <Field name="rememberMe" component={Input} type="checkbox"/> remember me
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
    </form>
}

const ReduxLoginForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)


type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType


export default connect(mapStateToProps, {login})(Login);