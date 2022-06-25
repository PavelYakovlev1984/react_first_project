import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return    (<div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 5, name: 'Valera'},
    ]
    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How ary you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]

    let dialogsElements = dialogData.map( d =>
        <DialogItem name={d.name} id={d.id}/>
    );

    let messageElements = messageData.map( m =>
        <Message message={m.message}/>
    )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>



                {   dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export  default Dialogs;