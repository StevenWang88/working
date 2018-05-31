import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

let initialState = Immutable.fromJS({
    "value": 0
})

export default createReducer(initialState, {
    ['ADD']: (state, action) => {
        return state.merge({
            "value": action.text.fnum + action.text.lnum
        })
    },
    ['LESS']: (state, action) => {
        return state.merge({
            "value": action.text.fnum - action.text.lnum
        })
    },
    ['MULTIPLE']: (state, action) => {
        return state.merge({
            "value": action.text.fnum * action.text.lnum
        })
    },
    ['EXCEPT']: (state, action) => {
        return state.merge({
            "value": action.text.fnum / action.text.lnum
        })
    }
})

// export default todo
