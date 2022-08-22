import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'

type MessageFormType = {
    sendMessage: (message: string) => void
}

const MessageForm = (props: MessageFormType) => {
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

type FormDataType = {
    message: string
}

const Form = (props: InjectedFormProps<FormDataType>) => {
    // const {handleSubmit} = props
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="message" component="textarea" type="text" placeholder={'Enter your message'}/>
        </div>
        <div>
            <button type="submit">Send</button>
        </div>
    </form>
}

const ReduxForm = reduxForm<FormDataType>({
    form: 'dialogAddMessageForm'
})(Form)

export default MessageForm;