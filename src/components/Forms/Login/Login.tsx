import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {loginTC as login} from '../../../redux/authReducer';
import {AppStateType} from '../../../redux/redux-store';
import {useForm, SubmitHandler} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {useNavigate} from 'react-router-dom';


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    multipleErrorInput: string
}


export function LoginReactHookForm(props: LoginPropsType) {
    const {register, handleSubmit, formState: {errors}} = useForm<FormDataType>();
    const onSubmit: SubmitHandler<FormDataType> = (data) => {
        props.login(data.email, data.password, data.rememberMe)
    }

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
                    pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
                        message: 'Write correct email'
                    }
                })} />
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
                })} />
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