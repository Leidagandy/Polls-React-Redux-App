import { ADD_POLL, RECEIVE_POLLS } from "../actions/polls";

export default function polls(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls, // we take that empty object and we spread all
        // the polls that we got on the action
      };
    case ADD_POLL:
      return {
        ...state,
        [action.poll.id]: action.poll, // the property on action.poll.id
        //will be a whatever action.poll is.
      };
    default:
      return state;
  }
}
