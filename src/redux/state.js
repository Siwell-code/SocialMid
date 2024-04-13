import {rerenderEntireTree} from '../render';


let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'HI', likesCount: 12 },
      { id: 2, message: 'Hi, how are you?', likesCount: 1 },
      { id: 3, message: 'Hi, how are you?', likesCount: 1 },
      { id: 4, message: 'Hi, how are you?', likesCount: 1 }
    ]
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
}

export let addPost = (postMessage) => {
  let newPost = {
  id: 5,
  message: postMessage,
  likesCount: 0
  };
  state.profilePage.posts.push (newPost);
  rerenderEntireTree (state);
}

export default state;