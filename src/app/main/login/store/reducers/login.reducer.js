import * as Actions from '../actions';

const initialState = null;

const loginReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.LOGIN:
            return {
                ...action.payload
            };

        default:
            return state;
    }

};


export default loginReducer;
