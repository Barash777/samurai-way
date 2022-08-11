import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h5>Login</h5>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
};

type FormDataType = {
    login: string
    password: string
    remember: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    // const {handleSubmit} = props
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="login" component="input" type="text" placeholder={'login'}/>
        </div>
        <div>
            <Field name="password" component="input" type="password" placeholder={'password'}/>
        </div>
        <div>
            <Field name="remember" component="input" type="checkbox"/> remember me
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
    </form>
}

const ReduxLoginForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

export default Login;