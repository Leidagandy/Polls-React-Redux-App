import * as React from "react";
import { handleAddPoll } from "../actions/polls";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function AddPoll() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [options, setOptions] = React.useState({
    a: "",
    b: "",
    c: "",
    d: "",
  });
  const [question, setQuestion] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/");
    dispatch(
      handleAddPoll({
        question,
        ...options,
      })
    );
  };

  const hanldeInputChange = ({ target }) => {
    const { value, name } = target;

    setOptions({
      ...options,
      [name]: value,
    });
  };

  const isDisabled = () => {
    return (
      question === "" ||
      options.a === "" ||
      options.b === "" ||
      options.c === "" ||
      options.d === ""
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>What is your question</h3>
      <input
        type="text"
        name="question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <h3>Options</h3>
      <label htmlFor="input">A.</label>
      <input
        type="text"
        name="a"
        value={options.a}
        onChange={hanldeInputChange}
      />

      <label htmlFor="input">B.</label>
      <input
        type="text"
        name="b"
        value={options.b}
        onChange={hanldeInputChange}
      />

      <label htmlFor="input">C.</label>
      <input
        type="text"
        name="c"
        value={options.c}
        onChange={hanldeInputChange}
      />

      <label htmlFor="input">D.</label>
      <input
        type="text"
        name="d"
        value={options.d}
        onChange={hanldeInputChange}
      />
      <button disabled={isDisabled()}>Submit</button>
    </form>
  );
}
