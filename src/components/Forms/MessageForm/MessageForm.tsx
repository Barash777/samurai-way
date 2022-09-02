import React from 'react';
// import {Field, InjectedFormProps, reduxForm} from 'redux-form'
// import {Textarea} from '../FormsControls/FormsControls';
// import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {SubmitHandler, useForm} from 'react-hook-form';

type MessageFormType = {
    sendMessage: (message: string) => void
}
type FormDataType = {
    message: string
}

const MessageForm = (props: MessageFormType) => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormDataType>();
    const onSubmit: SubmitHandler<FormDataType> = data => {
        // console.log(data);
        props.sendMessage(data.message)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <textarea {...register('message', {
                    required: 'message is required',
                    // maxLength: {
                    //     value: 50,
                    //     message: 'MAX length is 50'
                    // }
                })}
                          placeholder={'message text'}
                />
                {errors.message && <span>{errors.message.message}</span>}
            </div>
            <div>
                <input type="submit" value={'Send'}/>
            </div>
        </form>
    );
}

/*const MessageForm = (props: MessageFormType) => {
    const onSubmit = (formData: FormDataType) => {
        // console.log(formData)
        props.sendMessage(formData.message)
        // formData.message = ''
    }

    return (
        <div>
            <ReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


const maxLength = maxLengthCreator(50);

const Form = (props: InjectedFormProps<FormDataType>) => {
    // const {handleSubmit} = props
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                name="message"
                component={Textarea}
                type="text"
                placeholder={'Enter your message'}
                validate={[required, maxLength]}
            />
        </div>
        <div>
            <button type="submit">Send</button>
        </div>
    </form>
}

const ReduxForm = reduxForm<FormDataType>({
    form: 'dialogAddMessageForm'
})(Form)*/

export default MessageForm;