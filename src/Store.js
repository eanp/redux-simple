import {createStore} from 'redux'

const initialState = {
    count: 0
}

const rootReducers = (state=initialState,action) => {
    if(action.type == "INCREMENT"){
        return{count:state.count+1}
    } else if(action.type == "DECREMENT"){
        return{count:state.count-1}
    } else if(action.type == "MULTI"){
        return{count:state.count + 2}
    } else {
        return state
    }
}

const store = createStore(rootReducers)

export default store