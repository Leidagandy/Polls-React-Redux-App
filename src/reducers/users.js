import { RECEIVE_USERS } from "../actions/users";
import { ADD_POLL, RECEIVE_POLLS } from "../actions/polls";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_POLL:
      const poll = action.poll;
      const { author, id } = poll;

      return {
        ...state,
        [author]: {
          ...state[author], // keep the author the same
          polls: state[author].polls.concat([id]),
          // the state is going to be whatever is was but
          // at the author polls property we want to add the id of the new poll
          // onto the polls array
        },
      };
    default:
      return state;
  }
}
