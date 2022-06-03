import React from 'react';
import css from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={css.dialogsPage}>
            <div className={css.dialogs}>
                <div className={css.dialogItem + ' ' + css.active}>
                    Olga
                </div>
                <div className={css.dialogItem}>
                    Ilya
                </div>
                <div className={css.dialogItem}>
                    Anton
                </div>
                <div className={css.dialogItem}>
                    Tanya
                </div>
                <div className={css.dialogItem}>
                    Victor
                </div>
            </div>
            <div className={css.messages}>
                <div className={css.messageItem}>
                    Hi
                </div>
                <div className={css.messageItem}>
                    Hello
                </div>
                <div className={css.messageItem}>
                    What's up?
                </div>
            </div>
        </div>
    );
};

export default Dialogs;