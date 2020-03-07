import * as Actions from '../actions';

const initialState = null;

const apimanagerReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.CUSTOM_ACTION:
            return [
                ...action.payload
            ];
        default:
            return state;
    }
};

export default apimanagerReducer;
