import {FuseUtils} from '@fuse';

export const GET_PACK_INFO = '[PACK_INFO] GET PACK_INFO';
export const SET_PACK_INFO = '[PACK_INFO] SET PACK_INFO';


export function getPack_info()
{
    return {
        type: GET_PACK_INFO
    }
}

export function setPack_info(value)
{
    return {
        type: SET_PACK_INFO,
        value
    }
}



