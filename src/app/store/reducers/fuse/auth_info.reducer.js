import * as Actions from '../../actions/fuse/index';

const initialState =
    [
        {  id:'user', english:'user', chinese:'user'},
        {  id:'password', english:'password', chinese:'password'},
        {  id:'login', english:'login', chinese:'login'},
        {  id:'have an account', english:'have an account', chinese:'have an account'},
        {  id:'create and account', english:'create and account', chinese:'create and account'},
        {  id:'profile', english:'profile', chinese:'profile'},
        {  id:'purchase', english:'purchase', chinese:'purchase'},
        {  id:'logout', english:'logout', chinese:'logout'},
        {  id:'support_pro', english:'support_pro', chinese:'support_pro'},
        {  id:'register', english:'register', chinese:'register'},
        {  id:'admin', english:'admin', chinese:'admin'}
    ];


const auth_info = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_AUTH_INFO:
        {
            return [
                ...state
            ];
        }
        case Actions.SET_AUTH_INFO:
        {
            return [
                ...action.value
            ];
        }
        default:
        {
            return state;
        }
    }
};

export default auth_info;

