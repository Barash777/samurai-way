import React from 'react';
// import {Field, InjectedFormProps, reduxForm} from 'redux-form'
// import {maxLengthCreator, required} from '../../../utils/validators/validators';
// import {Textarea} from '../FormsControls/FormsControls';
import {SubmitHandler, useForm} from 'react-hook-form';

type PostFormType = {
    addNewPost: (text: string) => void
}
type FormDataType = {
    text: string
}

const PostForm = (props: PostFormType) => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormDataType>();
    const onSubmit: SubmitHandler<FormDataType> = data => {
        // console.log(data);
        props.addNewPost(data.text)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <textarea {...register('text', {
                    required: 'message is required',
                    // maxLength: {
                    //     value: 50,
                    //     message: 'MAX length is 50'
                    // }
                })}
                          placeholder={'post text'}
                />
                {errors.text && <span>{errors.text.message}</span>}
            </div>
            <div>
                <input type="submit" value={'Post'}/>
            </div>
        </form>
    );
};

/*const PostForm = (props: PostFormType) => {
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
})(Form)*/

export default PostForm;