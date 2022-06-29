import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 1, message: 'Hi, how are you?', likesCount: 12}

        ],
        newPostText: 'Paavel Yakovlev'
    },
    dialogsPage: {
        dialogData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 5, name: 'Valera'},
    ],
        messageData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How ary you'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ]
    },
    sideBar: {}
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}


export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
    };






export default state;