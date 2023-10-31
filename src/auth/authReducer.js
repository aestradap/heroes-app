import React from 'react'
import {types} from "../types/types";

//
// const state = {
//     name: 'Alain',
//     logged: true,
// }

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logget: true
            }
        case types.logout:
            return {
                logget: false
            }


        default :
            return state;

    }
}
