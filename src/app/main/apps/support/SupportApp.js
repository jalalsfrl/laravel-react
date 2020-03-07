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

function SupportApp(props)
{
    // const dispatch = useDispatch();
    // const widgets = useSelector(({supportApp}) => supportApp.widgets);

    const classes = useStyles(props);
    const pageLayout = useRef(null);

    // useEffect(() => {
    //     dispatch(Actions.getWidgets());
    // }, [dispatch]);

    return (
        <FusePageSimple
            content={
                <React.Fragment>
                    <div className="widget flex w-full p-12">
                        <Card elevation={1} className="flex flex-col text-white w-full p-24" style={{backgroundColor: '#00000033'}}>
                            <div className={classes.cardHeader} style={{border: '0px', height: 'auto'}}>
                                <Typography className="font-medium truncate" color="inherit">CLICK HERE TO JOIN STRESSER.CC TELEGRAM</Typography>
                            </div>
                        </Card>
                    </div>
                    
                    <div className="flex flex-wrap">
                        <div className="widget flex w-full md:w-1/2 p-12">
                            <Card elevation={1} className="flex flex-col text-white w-full" style={{backgroundColor: '#00000033'}}>
                                <div className={classes.cardHeader}>
                                    <Typography className="font-medium truncate" color="inherit">EMAIL</Typography>
                                </div>
                                <CardContent className='p-20'>
                                    <BootstrapInput
                                    className="w-full"
                                    defaultValue="jeffspender@protonmail.com"
                                    id="bootstrap-input"
                                    inputProps={{
                                        readOnly: true,
                                    }}/>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="widget flex w-full md:w-1/2 p-12">
                            <Card elevation={1} className="flex flex-col text-white w-full" style={{backgroundColor: '#00000033'}}>
                                <div className={classes.cardHeader}>
                                    <Typography className="font-medium truncate" color="inherit">TELEGRAM</Typography>
                                </div>
                                <CardContent className='p-20'>
                                    <BootstrapInput
                                    className="w-full"
                                    defaultValue="@jeffspender"
                                    id="bootstrap-input"
                                    inputProps={{
                                        readOnly: true,
                                    }}/>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="widget flex w-full md:w-1/2 p-12">
                            <Card elevation={1} className="flex flex-col text-white w-full" style={{backgroundColor: '#00000033'}}>
                                <div className={classes.cardHeader} style={{border: '0px', marginTop: '24px', height: 'auto'}}>
                                    <Typography className="font-medium truncate" color="inherit">WHAT IS A DDOS ATTACK</Typography>
                                </div>
                                <CardContent className='p-20'>
                                    <p className="text-center" style={{lineHeight: '24px'}}>A cyber-attack whic seeks to make a machine or network resource unavailable to its intended users by temporarily disrupting services of a host connected to the Internet. For example taking a website offline, an API used by a mobile application, someones internet connection or a game server.</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="widget flex w-full md:w-1/2 p-12">
                            <Card elevation={1} className="flex flex-col text-white w-full" style={{backgroundColor: '#00000033'}}>
                                <div className={classes.cardHeader} style={{border: '0px', marginTop: '24px', height: 'auto'}}>
                                    <Typography className="font-medium truncate" color="inherit">WHAT IS STRESSER.CC</Typography>
                                </div>
                                <CardContent className='p-20'>
                                    <p className="text-center" style={{lineHeight: '24px'}}>Stresser.cc its an advanced tool that allows you to test your services against real time strong DDOS attacks with the latest methods used by hackers to attack companies, such as botnets and ddos-mitigation bypasses. With the intend to help you find out if your website or server can be taken down.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="widget flex w-full md:w-1/2 p-12">
                            <Card elevation={1} className="flex flex-col text-white w-full" style={{backgroundColor: '#00000033'}}>
                                <div className={classes.cardHeader} style={{border: '0px', marginTop: '24px', height: 'auto'}}>
                                    <Typography className="font-medium truncate" color="inherit">IS IT SAFE TO USE?</Typography>
                                </div>
                                <CardContent className='p-20'>
                                    <p className="text-center" style={{lineHeight: '24px'}}>Yes! it is, all attacks are untraceable and we do an excellent job protecting our customers. We do not keep any kind of records that can compromise your privacy and even usernames are encrypted with the strongest algorithms to ensure your safety!</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="widget flex w-full md:w-1/2 p-12">
                            <Card elevation={1} className="flex flex-col text-white w-full" style={{backgroundColor: '#00000033'}}>
                                <div className={classes.cardHeader} style={{border: '0px', marginTop: '24px', height: 'auto'}}>
                                    <Typography className="font-medium truncate" color="inherit">WHAT CAN IT ATTACK?</Typography>
                                </div>
                                <CardContent className='p-20'>
                                    <p className="text-center" style={{lineHeight: '24px'}}>Our service is oriented towards attacking websites and we count with bypasses for Cloudflare (CF), CF Under Attack Mode, CF Captcha, Sucuri, Blazingfast, DDOS-GUARD among others. We also provide a good Layer 4 to attack residential connections and servers with our bypass methods.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="widget flex w-full md:w-1/2 p-12">
                            <Card elevation={1} className="flex flex-col text-white w-full" style={{backgroundColor: '#00000033'}}>
                                <div className={classes.cardHeader} style={{border: '0px', marginTop: '24px', height: 'auto'}}>
                                    <Typography className="font-medium truncate" color="inherit">HOW DO I GET A PLAN?</Typography>
                                </div>
                                <CardContent className='p-20'>
                                    <p className="text-center" style={{lineHeight: '24px'}}>Choose the right plan for you in the packages page and go to checkout, just send the required amount of bitcoins, wait for 3 confirmations on the transaction and press the check payment button, you will automatically receive your plan. If you closed the tab just re open it.</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="widget flex w-full md:w-1/2 p-12">
                            <Card elevation={1} className="flex flex-col text-white w-full" style={{backgroundColor: '#00000033'}}>
                                <div className={classes.cardHeader} style={{border: '0px', marginTop: '24px', height: 'auto'}}>
                                    <Typography className="font-medium truncate" color="inherit">CAN I UPGRADE MY PLAN?</Typography>
                                </div>
                                <CardContent className='p-20'>
                                    <p className="text-center" style={{lineHeight: '24px'}}>Yes, you can. Contact me and telegram / email and provide your username and the desired plan, depending on the remaining time of your current plan you will be offered a certain discount to move to the choosen plan, then you pay the amount and kaboom! You get your plan.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                </React.Fragment>
            }
            ref={pageLayout}
        />
    );
}

export default withReducer('supportApp', reducer)(SupportApp);
