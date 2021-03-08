import axios from "axios";
import { call, put } from "redux-saga/effects";
import { environment } from '../../environment';
import { addPollSuccess, addPollError, getAllPolls } from '../Redux/Action/action';
import {
    GETALL_POLLS,
} from '../Redux/Constant/Type';



export function* addPollSaga(action) {
    let option = ''
    action.poll.option.forEach((a, i) => {
        option = option.concat((i == 0 ? a.option : `____${a.option}`))
    })
    if (action.poll.title.length > 0) {
        try {
            const response = yield call(async () => {
                const result = await axios.get(`${environment.apiBase}/add_poll?title=${action.poll.title}&options=${option}`)
                return result;
            })
            if (response.data.error) {
                alert(response.data.error)
            }
            else {
                alert("User added sucessfully")
                action.poll.setTiltle('')
                yield put({ type: GETALL_POLLS, getAllPolls });
            }


            if (response) {
                yield put(addPollSuccess({ message: 'user added successfully' }))

            } else {
                yield put(addPollError({ error: "invalid user" }))
            }
        } catch (err) {
            console.error(err)
        }
    } else {
        yield put(addPollError({ error: "invalid user" }))
        alert("Please fill all the field")
    }
}