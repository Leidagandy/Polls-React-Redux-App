import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Dashboard.css"

export default function Dashboard() {
  //create a local react state
  const [list, setList] = React.useState("unanswered");

  //grab from redux store
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);
  const polls = useSelector((state) => state.polls);

  //grab the answers from users
  const answers = users[authedUser].answers;

  const answered = answers
    .map((id) => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  const unanswered = Object.keys(polls)
    .filter((id) => !answers.includes(id))
    .map((id) => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  const questions = { answered, unanswered };

  return (
    <React.Fragment>
      <div className="dashboard-toggle">
        <button
        className="dashboard-btn"
          style={{
            textDecoration: list === "unanswered" ? "underline" : null,
          }}
          onClick={() => setList("unanswered")}
        >
          Unanswered
        </button>
        <span> | </span>
        <button
        className="dashboard-btn"
          style={{
            textDecoration: list === "answered" ? "underline" : null,
          }}
          onClick={() => setList("answered")}
        >
          Answered
        </button>
        </div>
        <div className="dashboard-container">
        <ul className="dashboard-list">
          {questions[list].map((poll) => (
            <li key={poll.id}>
              <Link to={`polls/${poll.id}`}>{poll.question}</Link>
            </li>
          ))}
        </ul>
        </div>
      
    </React.Fragment>
  );
}
