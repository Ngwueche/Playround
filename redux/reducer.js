import * as actions from './actions.js';
let lastId = 0;

export default function reducer (state = [], action){
    if (action.type === actions.CLOCKED )
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ]
    else if (action.type === actions.UNCLOCKED){
        return state.filter(CLOCKED => staff.id !== action.payload.id)
    }else if (action.type === actions.RESOLVED){
        return state.map(CLOCKED => resolved.id !== action.payload.id ? CLOCKED : {...CLOCKED, resolved: true})
    }
    return state;
}