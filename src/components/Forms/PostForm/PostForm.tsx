import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../FormsControls/FormsControls';

type PostFormType = {
    addNewPost: (text: string) => void
}

const PostForm = (props: PostFormType) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        props.addNewPost(formData.text)
    }

    return (
        <div>
            <ReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

type FormDataType = {
    text: string
}

const maxLength = maxLengthCreator(10);

const Form = (props: InjectedFormProps<FormDataType>) => {
    // const {handleSubmit} = props
    // const maxLength = maxLengthCreator(10);

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                name="text"
                // component={FormControlMy('textarea')}
                component={Textarea}
                type="text"
                placeholder={'post text'}
                validate={[required, maxLength]}
            />
        </div>
        <div>
            <button type="submit">Add post</button>
        </div>
    </form>
}

const ReduxForm = reduxForm<FormDataType>({
    form: 'profileAddPostForm'
})(Form)

export default PostForm;