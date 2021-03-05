import {
    LOGIN_REQUESTED,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SIGNUP_REQUESTED,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    ADDUSER_REQUESTED,
    ADDUSER_SUCCESS,
    ADDUSER_ERROR,
    GETALL_USERS,
    RECEIVEALL_USERS,
    GETALL_POLLS,
    RECEIVEDALL_POLLS,
} from '../Constant/Type';


export const loginRequested = (user) => {
    return {
        type: LOGIN_REQUESTED,
        user
    }
}

export const loginSuccess = (username) => {
    return {
        type: LOGIN_SUCCESS,
        username
    }
}

export const loginError = () => {
    return {
        type: LOGIN_ERROR,

    }
}


export const signUpRequested = (user) => {
    return {
        type: SIGNUP_REQUESTED,
        user
    }
}

export const signUpSuccess = () => {
    return {
        type: SIGNUP_SUCCESS,
    }
}

export const signUpError = () => {
    return {
        type: SIGNUP_ERROR,
    }
}


export const addUserRequested = (user) => {
    return {
        type: ADDUSER_REQUESTED,
        user
    }
}

export const addUserSuccess = () => {
    return {
        type: ADDUSER_SUCCESS,
    }
}

export const addUserError = () => {
    return {
        type: ADDUSER_ERROR,
    }
}



export const getAllUsers = () => {
    return {
        type: GETALL_USERS,
    }
}

export const receiveAllUsers = (user) => {
    return {
        type: RECEIVEALL_USERS,
        user
    }
}



export const getAllPolls = () => {
    return {
        type: GETALL_POLLS
    }
}

export const receivedAllPolls = (polls) => {
    return {
        type: RECEIVEDALL_POLLS,
        polls
    }
}
