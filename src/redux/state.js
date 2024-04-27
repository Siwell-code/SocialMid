const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi', likesCount: 12 },
        { id: 2, message: 'YO', likesCount: 1 },
        { id: 3, message: 'Hi, how are you?', likesCount: 1 },
        { id: 4, message: 'Hi, how are you?', likesCount: 1 }
      ],
      newPostText: "it-kamasutra.com"
    },
    dialogsPage: {
      messages: [
        { id: 1, message: 'HI' },
        { id: 2, message: 'HI' },
        { id: 3, message: 'HI' },
        { id: 4, message: 'HI' },
        { id: 5, message: 'HI' },
        { id: 6, message: 'HI' }
      ],
      dialogs: [
        { id: 1, name: 'Nick' },
        { id: 2, name: 'Clare' },
        { id: 3, name: 'Wolf' },
        { id: 4, name: 'Geta' },
        { id: 5, name: 'Saimons' },
        { id: 6, name: 'Perfecto' }
      ]
    }
  },
  _callSubscriber() {
    console.log('State changed')
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}
export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text });


export default store;
window.state = store;