import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleInitialData } from "../actions/shared";
// import Leaderboard from "./Leaderboard";
import Dashboard from "./Dashboard"

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authedUser === null);

  React.useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  //   const store = useSelector((store) => store)
  // console.log('Store', store)

  return (
    <div>
      {loading === true ? null : (
          <Dashboard />
      )}
    </div>
  );
}
