import * as React from "react";
import { useSelector } from "react-redux";
import "./Leaderboard.css";

export default function Leaderboard() {
  const users = useSelector((state) => state.users);
  //map over users formated then based on how many answers/polls they have
  const sorted = Object.keys(users)
    .map((id) => {
      const { name, avatarURL, polls } = users[id];

      return {
        id,
        name,
        avatarURL,
        polls: polls.length,
        answers: users[id].answers.length,
        total: Object.keys(users[id].answers).length + users[id].polls.length,
      };
    })
    .sort((a, b) => b.polls + b.answers - (a.polls + a.answers));

  console.log("sorted:", sorted);

  return (
    <div className="container">
      <ul>
        {sorted.map((user) => (
          <li key={user.id} className="user-container">
            <img
              src={user.avatarURL}
              alt={`Avatar for ${user.name}`}
              className="avatar"
            />
            <div>
              <h2>{user.name}</h2>
              <p className="scores">{user.polls} Polls</p>
              <p className="scores">{user.answers} Answers</p>
            </div>
            <div className="score-item">
              <p>Score</p>
              <p className="circle">{user.total}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
