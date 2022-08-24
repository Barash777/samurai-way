import React from 'react';
import css from './FormsControls.module.css'

export const FormControl = ({input, meta, children, ...props}: any) => {

    const isError = meta.touched && meta.error

    // return <Component {...props}/>;
    return (
        <div className={css.formControl + ' ' + (isError ? css.error : '')}>
            <div>
                {children}
            </div>
            <div>
                {isError && <span>{meta.error}</span>}
            </div>
        </div>
    );
}

export const FormControlMy = (Component: React.ElementType) => {

    return ({input, meta, ...props}: any) => {

        const isError = meta.touched && meta.error

        return (
            <div className={css.formControl + ' ' + (isError ? css.error : '')}>
                <div>
                    <Component {...input} {...props} />
                </div>
                <div>
                    {isError && <span>{meta.error}</span>}
                </div>
            </div>
        );
    }
}

/*const FormControl2 = ({input, meta, ...props}: any) => {

    const isError = meta.touched && meta.error

    return (
        <div className={css.formControl + ' ' + (isError ? css.error : '')}>
            <div>
                <textarea {...input} {...props} />
            </div>
            <div>
                {isError && <span>{meta.error}</span>}
            </div>
        </div>
    );
}*/

export const Textarea = (props: any) => {
    const {input, ...restProps} = props
    return <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl>
};

/*export const Textarea = ({input, meta, ...props}: any) => {

    const isError = meta.touched && meta.error

    return (
        <div className={css.formControl + ' ' + (isError ? css.error : '')}>
            <div>
                <textarea {...input} {...props} />
            </div>
            <div>
                {isError && <span>{meta.error}</span>}
            </div>
        </div>
    );
};*/

export const Input = (props: any) => {
    const {input, ...restProps} = props
    return <FormControl {...props}> <input {...input} {...restProps} /></FormControl>
};

/*export const Input = ({input, meta, ...props}: any) => {

    const isError = meta.touched && meta.error

    return (
        <div className={css.formControl + ' ' + (isError ? css.error : '')}>
            <div>
                <input {...input} {...props} />
            </div>
            <div>
                {isError && <span>{meta.error}</span>}
            </div>
        </div>
    );
};*/
