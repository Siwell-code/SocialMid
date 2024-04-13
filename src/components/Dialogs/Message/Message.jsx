import React from 'react';
import s from './../Dialogs.module.css'

const Message = (props) => {

    let newMessageElement = React.createRef();

    let sendMesage = () => {
        let text = newMessageElement;
        alert(text);
    }
    return (
        <div className={s.dialog}>{props.message}
            <div>
                <div>
                    <textarea ref={newMessageElement}> </textarea>;
                </div>

                <div>
                    <button onClick={sendMesage}> send Message</button>
                </div>
            </div>
        </div >

    );

}



export default Message;