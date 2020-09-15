import { ADD_POLL, RECEIVE_POLLS } from "../actions/polls";
import { ADD_ANSWER } from "../actions/answers";

export default function polls(state = {}, action) {
  // console.log(action)
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
        [action.poll.id]: action.poll, // the property at action.poll.id
        //will be a whatever action.poll is.
      };
    case ADD_ANSWER:
        const { answer, id, authedUser } = action // we grab all of the data from our action
        const poll = state[id] // current state of our polls id comes from the action
        // we need to add auth user id to whatever option they select in this poll
        const votesOption = answer + "Votes"
      return {
          ...state,
          [action.id]: {
              ...poll,
              [votesOption]: poll[votesOption].concat([authedUser]) //we add auth user id to this array
          }
      };
    default:
      return state;
  }
}
