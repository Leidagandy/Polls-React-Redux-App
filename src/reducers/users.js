import { RECEIVE_USERS } from "../actions/users";
import { ADD_POLL } from "../actions/polls";
import { ADD_ANSWER } from "../actions/answers"


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
      case ADD_ANSWER :
        const user = state[action.authedUser] // we can grab the user at state[action.authedUser]
        return {
          ...state,
          [action.authedUser]: {
            ...user,
            answers: user.answers.concat([action.id])// add id of the poll 
            //to the users answers property
          }
        }
    default:
      return state;
  }
}
