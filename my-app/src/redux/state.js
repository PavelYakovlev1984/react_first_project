
let store = {

    _state: {
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
    },
    _callSubscriber() {
        console.log('Statr dfdff');
    },

    getState() {
        return this._state;
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0};

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
            } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
            }
        }
}

window.store = store;

    export default store;