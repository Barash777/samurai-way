import React, {useEffect} from 'react';
// import {Field, InjectedFormProps, reduxForm} from 'redux-form'
// import {Input} from '../FormsControls/FormsControls';
// import {required} from '../../../utils/validators/validators';
import {connect} from 'react-redux';
import {loginTC as login} from '../../../redux/authReducer';
import {AppStateType} from '../../../redux/redux-store';
import {useForm, SubmitHandler} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {useNavigate} from 'react-router-dom';


type Inputs = {
    example: string,
    exampleRequired: string,
};

export function Ex() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch('example')) // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register('example')} />

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register('exampleRequired', {required: true})} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit"/>
        </form>
    );
}


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    multipleErrorInput: string
}

// Qwerty1_Asdfgh2

export function LoginReactHookForm(props: LoginPropsType) {
    const {register, handleSubmit, formState: {errors}} = useForm<FormDataType>();
    const onSubmit: SubmitHandler<FormDataType> = (data) => {
        // console.log('data', data);
        props.login(data.email, data.password, data.rememberMe)
        // console.log('res in onSubmit', res)
    }

    // const test = () => {
    //     console.log('test error')
    // }

    const navigate = useNavigate();

    useEffect(() => {
        if (props.isAuth) {
            navigate(-1)
        }
    }, [navigate, props.isAuth])

    // if (props.isAuth) {
    //     return <Navigate to={'/'}/>
    // }

    return (
        <form onSubmit={handleSubmit(onSubmit/*, test*/)}>
            <div>
                <label>Email</label>
                <input {...register('email', {
                    required: 'email is required',
                    // maxLength: {
                    //     value: 10,
                    //     message: 'MAX email error'
                    // }
                })} />
                {/*{errors.email && <span>{errors.email.message}</span>}*/}
                <ErrorMessage errors={errors} name="email"/>
            </div>
            <div>
                <label>Password</label>
                <input type={'password'} {...register('password', {
                    required: 'password is required',
                    minLength: {
                        value: 8,
                        message: 'Min length is 8'
                    },
                    /*pattern: {
                        value: /\d+/,
                        message: 'This input is number only.'
                    },*/
                })} />
                {/*{errors.password && <span>{errors.password.message}</span>}*/}
                <ErrorMessage errors={errors} name="password"/>

                {/*<ErrorMessage
                    errors={errors}
                    name="password"
                    render={({messages}) =>
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                            <p key={type}>{message}</p>
                        ))
                    }
                />*/}
            </div>
            <div>
                <label>Remember me</label>
                <input type={'checkbox'} {...register('rememberMe')} />
            </div>
            <div>
                <input type="submit" value={'Login'}/>
            </div>
            {props.error && <div style={{color: 'red'}}>
                <span>!!! {props.error} !!!</span>
            </div>}
        </form>
    );
}


/*const Login = (props: LoginPropsType) => {

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
})(LoginForm)*/


type MapStateToPropsType = {
    isAuth: boolean
    error: string | null
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        error: state.auth.error
    }
}

export type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType


export default connect(mapStateToProps, {login})(LoginReactHookForm);