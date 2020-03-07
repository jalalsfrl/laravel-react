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
    makeStyles,
  } from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    Typography,
    InputBase
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px 24px',
        height: 48,
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        fontWeight: 'bold'
    }
}));

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

function ShowoffApp(props)
{
    // const dispatch = useDispatch();
    // const projects = useSelector(({showoffApp}) => showoffApp.projects);

    const classes = useStyles(props);
    const pageLayout = useRef(null);

    // useEffect(() => {
    //     dispatch(Actions.getProjects());
    // }, [dispatch]);

    function handleChangeTab(event, tabValue)
    {
        // setTabValue(tabValue);
    }

    return (
        <FusePageSimple
            content={
                <React.Fragment>
                    <div className="flex flex-wrap">
                        <div className="block text-center w-full md:w-1/2 p-12">
                            <iframe  width="520" height="315" src="https://www.youtube.com/embed/X5vA5cWakKM"></iframe>
                            <h4 className="text-white text-center">TCP Bypass vs 20G NFO Server</h4>
                        </div>
                        <div className="block text-center w-full md:w-1/2 p-12">
                            <iframe  width="520" height="315" src="https://www.youtube.com/embed/z_aD5netx30"></iframe>
                            <h4 className="text-white text-center">TCP Bypass vs 20G NFO Server</h4>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="block text-center w-full md:w-1/2 p-12">
                            <iframe  width="520" height="315" src="https://www.youtube.com/embed/09bUqMtFDeg"></iframe>
                            <h4 className="text-white text-center">CyberDDOS Bypass - MULTIBYPASS</h4>
                        </div>
                        <div className="block text-center w-full md:w-1/2 p-12">
                            <iframe  width="520" height="315" src="https://www.youtube.com/embed/jLeVsRW2Xqk"></iframe>
                            <h4 className="text-white text-center">Blazingfast Bypass - MULTIBYPASS</h4>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="block text-center w-full md:w-1/2 p-12">
                            <iframe  width="520" height="315" src="https://www.youtube.com/embed/Z6ZHKECpxUg"></iframe>
                            <h4 className="text-white text-center">STRESSER.CC 400K RQPS</h4>
                        </div>
                        <div className="block text-center w-full md:w-1/2 p-12">
                            <iframe  width="520" height="315" src="https://www.youtube.com/embed/hKO1opoOdEg"></iframe>
                            <h4 className="text-white text-center">STRESSER.CC vs BOOTER.PW</h4>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="block text-center w-full md:w-1/2 p-12">
                            <iframe  width="520" height="315" src="https://www.youtube.com/embed/IDW11HxAkuI"></iframe>
                            <h4 className="text-white text-center">SUCURI Bypass - 1 Concurrent</h4>
                        </div>
                        <div className="block text-center w-full md:w-1/2 p-12">
                            <iframe  width="520" height="315" src="https://www.youtube.com/embed/xxkUGnEiKC8"></iframe>
                            <h4 className="text-white text-center">DDOS-Guard Bypass - 1 Concurrent</h4>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="block text-center w-full md:w-1/2 p-12">
                            <iframe  width="520" height="315" src="https://www.youtube.com/embed/gMo-zgGb8Rg"></iframe>
                            <h4 className="text-white text-center">Cloudflare UAM - 1 Concurrent</h4>
                        </div>
                        <div className="block text-center w-full md:w-1/2 p-12">
                            <iframe  width="520" height="315" src="https://www.youtube.com/embed/i5N_C2cjCc0"></iframe>
                            <h4 className="text-white text-center">Cloudflare CAPTCHA - 1 Concurrent</h4>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="block text-center w-full md:w-1/2 p-12">
                            <iframe  width="520" height="315" src="https://www.youtube.com/embed/WfRGysdV3Yg"></iframe>
                            <h4 className="text-white text-center">Layer 4 DSTAT - 1 Concurrent</h4>
                        </div>
                        <div className="block text-center w-full md:w-1/2 p-12">
                            <iframe  width="520" height="315" src="https://www.youtube.com/embed/E8jrwdKnM4o"></iframe>
                            <h4 className="text-white text-center">Captcha Bypass - 1 Concurrent</h4>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="block text-center w-full md:w-1/2 p-12">
                            <iframe  width="520" height="315" src="https://www.youtube.com/embed/OneWv6mG_OE"></iframe>
                            <h4 className="text-white text-center">Leaseweb L4 - 1 Concurrent</h4>
                        </div>
                    </div>

                </React.Fragment>
            }
            ref={pageLayout}
        />
    );
}

export default withReducer('showoffApp', reducer)(ShowoffApp);
