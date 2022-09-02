import React from 'react';
// import {Field, InjectedFormProps, reduxForm} from 'redux-form'
// import {Input} from '../FormsControls/FormsControls';
// import {required} from '../../../utils/validators/validators';
import {connect} from 'react-redux';
import {loginTC as login} from '../../../redux/authReducer';
import {AppStateType} from '../../../redux/redux-store';
import {Navigate} from 'react-router-dom';
import {useForm, SubmitHandler} from 'react-hook-form';


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
}

export function LoginReactHookForm(props: LoginPropsType) {
    const {register, handleSubmit, formState: {errors}} = useForm<FormDataType>();
    const onSubmit: SubmitHandler<FormDataType> = data => {
        // console.log(data);
        props.login(data.email, data.password, data.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email</label>
                <input {...register('email', {
                    required: 'email is required',
                    // maxLength: {
                    //     value: 10,
                    //     message: 'MAX email error' // JS only: <p>error message</p> TS only support string
                    // }
                })} />
                {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div>
                <label>Password</label>
                <input type={'password'} {...register('password', {
                    required: 'password is required',
                    minLength: {
                        value: 8,
                        message: 'Min length is 8' // JS only: <p>error message</p> TS only support string
                    }
                })} />
                {errors.password && <span>{errors.password.message}</span>}
            </div>
            <div>
                <label>Remember me</label>
                <input type={'checkbox'} {...register('rememberMe')} />
            </div>
            <div>
                <input type="submit" value={'Login'}/>
            </div>
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


export default connect(mapStateToProps, {login})(LoginReactHookForm);