import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'

type PostFormType = {
    addNewPost: (text: string) => void
}

const PostForm = (props: PostFormType) => {
    const onSubmit = (formData: FormDataType) => {
        // console.log(formData)
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

const Form = (props: InjectedFormProps<FormDataType>) => {
    // const {handleSubmit} = props
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="text" component="textarea" type="text" placeholder={'post text'}/>
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