import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Textarea} from '../FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../../utils/validators/validators';

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
})(Form)

export default MessageForm;