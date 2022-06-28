let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 1, message: 'Hi, how are you?', likesCount: 12}

        ]
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

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
}

export default state;