const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_NEW_MESSAGE_BODY:
    state.newMessageBody = action.body;
    return state;
    case SEND_MESSAGE:
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({ id: 7, message: body });
        return state;
        default:
            return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;