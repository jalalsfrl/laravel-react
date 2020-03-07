import {FuseUtils} from '@fuse';

export const GET_AUTH_INFO = '[AUTH_INFO] GET AUTH_INFO';
export const SET_AUTH_INFO = '[AUTH_INFO] SET AUTH_INFO';


export function getAuth_info()
{
    return {
        type: GET_AUTH_INFO
    }
}

export function setAuth_info(value)
{
    return {
        type: SET_AUTH_INFO,
        value
    }
}



