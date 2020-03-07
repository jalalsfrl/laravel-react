import axios from 'axios';

export const CUSTOM_ACTION = '[API MANAGER] CUSTOM_ACTION';

export function customAction()
{
    const request = axios.get('/api/url');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : CUSTOM_ACTION,
                payload: response.data
            })
        );
}
