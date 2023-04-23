import * as actions from './actions.js';

export const clockedIn = description =>({
    type : actions.CLOCKED,
    payload: {
        description
    }
})
export const resolved = id =>({
    type : actions.RESOLVED,
    payload: {
        id
    }
})

// export function clockedIn(description){
//     return {
//         type: actions.UNCLOCKED,
//         payload: {
//             description: 'Staff1'
//         }
//     }

// }