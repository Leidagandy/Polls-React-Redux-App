import { savePollAnswer } from "../utils/api";

export const ADD_ANSWER = "ADD_ANSWER";

export function addAnswer({ authedUser, id, answer }) {
  return {
    type: ADD_ANSWER,
    authedUser,
    id,
    answer,
  };
}

export function handleAddAnswer(answerData) {
  return (dispatch) => {
    savePollAnswer(answerData).then(() => dispatch(addAnswer(answerData)));
  };
}
