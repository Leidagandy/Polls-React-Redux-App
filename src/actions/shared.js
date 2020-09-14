import { getInitialData } from "../utils/api"
import { setAuthedUser } from "../actions/authedUser"
import { receiveUsers } from "../actions/users"
import { receivePolls } from ".. actions.polls"

const AUTHED_ID = "leidagoncalves"

//action creator
export function handleInitialData () {
    return (dispatch) =>  {
    return getInitialData()
    .then(({ users, polls }) => {
        dispatch(receiveUsers(users)) // add user to state
        dispatch(receivePolls(polls)) // add polls to state
        dispatch(setAuthedUser(AUTHED_ID)) // set authedUser
    })

    }
}