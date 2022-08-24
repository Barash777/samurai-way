import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from '../FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';

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
            <Field
                name="login"
                component={Input}
                type="text"
                placeholder={'login'}
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
            <Field name="remember" component={Input} type="checkbox"/> remember me
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