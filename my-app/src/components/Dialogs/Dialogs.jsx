import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return    (<div className={s.dialogs + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {



    let dialogsElements = props.state.dialogData.map( d =>
        <DialogItem name={d.name} id={d.id}/>
    );

    let messageElements = props.state.messageData.map( m =>
        <Message message={m.message}/>
    )
    let newMessageElement = React.createRef();
    console.log(newMessageElement);
    let addMessage =  () => {
        let texts =newMessageElement.current.value;
        alert(texts);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <textarea ref={newMessageElement}></textarea>
<button onClick ={
                    addMessage
                }>Add</button>

                {   dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export  default Dialogs;