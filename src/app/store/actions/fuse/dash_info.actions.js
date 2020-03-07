import {FuseUtils} from '@fuse';

export const GET_DASH_INFO = '[DASH_INFO] GET DASH_INFO';
export const SET_DASH_INFO = '[DASH_INFO] SET DASH_INFO';


export function getDash_info()
{
    return {
        type: GET_DASH_INFO
    }
}

export function setDash_info(value)
{
    return {
        type: SET_DASH_INFO,
        value
    }
}



