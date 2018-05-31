export const add = (text) => (dispatch) => dispatch({type: 'ADD', text})
export const less = (text) => (dispatch) => dispatch({type: 'LESS', text})
export const multiple = (text) => (dispatch) => dispatch({type: 'MULTIPLE', text})
export const except = (text) => (dispatch) => dispatch({type: 'EXCEPT', text})
