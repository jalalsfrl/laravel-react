import * as Actions from '../actions';

// const initialState = null;
const initialState = {
    success: false,
    error  : false,
    msg: ''
};

const ddosReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.ATTACK_SUCSS:
            return {
                error: false,
                success: true,
                msg: action.payload
            };
        case Actions.ATTACK_FAIL:
            return {
                success: false,
                error: true,
                msg: action.payload
            };
        case Actions.CLOSE_MSG:
            
            return {
                success: false,
                error: false,
                msg: ''
            };
        default:
            return state;
    }
};

export default ddosReducer;
