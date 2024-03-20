import React from 'react';
import s from './Dialogs.module.css'
import { Link } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <Link to={path}>{props.name}</Link>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

function Dialogs() {

    let dialogsData = [
        { id: 1, name: 'Nick' },
        { id: 2, name: 'Clare' },
        { id: 3, name: 'Wolf' },
        { id: 4, name: 'Geta' },
        { id: 5, name: 'Saimons' },
        { id: 6, name: 'Perfecto' }
    ]

    let messagesData = [
        { id: 1, message: 'HI' },
        { id: 2, message: 'HI' },
        { id: 3, message: 'HI' },
        { id: 4, message: 'HI' },
        { id: 5, message: 'HI' },
        { id: 6, message: 'HI' }
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            </div>
        </div>
    );
}

export default Dialogs;