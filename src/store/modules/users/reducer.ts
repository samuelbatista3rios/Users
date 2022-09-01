import produce from "immer";
import { Reducer } from "redux";
import { IUserState } from "../../../@types/user";

const INITIAL_STATE: IUserState = {
  items: [
    
  ],
};

const users: Reducer<IUserState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_USERS": {
        const { items } = action.payload;
        const userIndex = draft.items.findIndex((item) => item.id === items.id);
        if (userIndex >= 0) {
          draft.items[userIndex] = items;
        } else {
          draft.items.push(items);
        }
        break;
      }
      case "DELETE_USER": {
        const { items } = action.payload;
        draft.items = draft.items.filter((item) => items.id !== item.id);
      }
      default: {
        return draft;
      }
    }
  });
};

export default users;
