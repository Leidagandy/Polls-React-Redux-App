import * as React from "react";
import { getPercentage, getTextKeys, getVoteKeys } from "../utils/helpers";
import { handleAddAnswer } from "../actions/answers";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Poll() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);
  const polls = useSelector((state) => state.polls);
  //get the individual polls
  const poll = polls[id]; // at the url parameter

  if (!poll) {
    return <p>This poll does not exist!</p>;
  }
  const voteKeys = getVoteKeys(); // returns an array
  // give us what the user voted for
  const authorAvatar = users[poll.author].avatarURL;
  const vote = voteKeys.reduce((vote, key) => {
    if (poll[key].includes(authedUser)) {
      // that means the user voted for that option
      return key[0];
    }
    return vote === null ? null : vote;
  }, null);

  //get total votes a specific poll has
  const totalVotes = voteKeys.reduce(
    (total, key) => total + poll[key].length,
    0
  );

  const handleAnswer = (answer) => {
    if (vote === null) {
      dispatch(
        handleAddAnswer({
          authedUser,
          answer,
          id: poll.id,
        })
      );
    }
  };

  return (
    <div>
      <h1>{poll.questions}</h1>
      <div>
        By <img src={authorAvatar} alt={`Auhtor's avatar`} />
      </div>
      <ul>
        {getTextKeys().map((key) => {
          const count = poll[key[0] + "Votes"].length; // get how many votes a option has
          return (
            <li key={key} onClick={() => handleAnswer(key[0])}>
              {vote === null ? (
                poll[key]
              ) : (
                <div>
                  <span>{poll[key]}</span>
                  <span>
                    {getPercentage(count, totalVotes)}%({count})
                  </span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
