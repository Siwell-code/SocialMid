import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'

function Dialogs() {

    let dialogs = [
        { id: 1, name: 'Nick' },
        { id: 2, name: 'Clare' },
        { id: 3, name: 'Wolf' },
        { id: 4, name: 'Geta' },
        { id: 5, name: 'Saimons' },
        { id: 6, name: 'Perfecto' }
    ]

    let messages = [
        { id: 1, message: 'HI' },
        { id: 2, message: 'HI' },
        { id: 3, message: 'HI' },
        { id: 4, message: 'HI' },
        { id: 5, message: 'HI' },
        { id: 6, message: 'HI' }
    ]

    let dialogsElements = dialogs
    .map (d => <DialogItem name={d.name} id={d.id} />);

    let messagesElement = messages
    .map (m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
              { dialogsElements }
            </div>
            <div className={s.messages}>
              { messagesElement }
            </div>
        </div>
    );
}

export default Dialogs;