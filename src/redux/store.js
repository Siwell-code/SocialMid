import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
      ],
      newMessageBody: ""
    },
    sidebar: {}
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.state = store;