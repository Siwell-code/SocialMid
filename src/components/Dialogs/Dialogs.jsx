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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Nick' id='1'/>
                <DialogItem name='Clare' id='2'/>
                <DialogItem name='Wolf' id='3'/>
                <DialogItem name='Geta' id='4'/>
                <DialogItem name='Saimons' id='5'/>
                <DialogItem name='Perfecto' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='how are u'/>
                <Message message='serrrr'/>
            </div>
        </div>
    );
}

export default Dialogs;