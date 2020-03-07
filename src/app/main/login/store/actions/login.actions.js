import axios from 'axios';

export const LOGIN = '[LOGIN APP] LOGIN';

export function userLogin()
{
    const request = axios.get('/api/project-dashboard-app/widgets');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : LOGIN,
                payload: response.data
            })
        );
}
