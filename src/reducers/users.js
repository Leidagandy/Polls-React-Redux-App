import { RECEIVE_USERS } from "../actions/users";
import { ADD_POLL, RECEIVE_POLLS } from "../actions/polls";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    default:
      return state;
  }
}
