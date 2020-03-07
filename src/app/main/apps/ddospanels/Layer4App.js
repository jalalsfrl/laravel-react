import React, {useEffect, useRef, useState} from 'react';
import {FusePageSimple} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions'
import reducer from './store/reducers';
import _ from 'lodash';
import clsx from 'clsx';
import {
    fade,
    withStyles,
    makeStyles,
  } from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    Typography,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    InputBase,
    FormControl,
    NativeSelect,
    Button,
    Icon
} from '@material-ui/core';

const tableData1 = [
    {item: 'HTTP-SPAM [GET]', desc: 'Method that sends a high amount of GET requests per second. Effective against websites with high resources.'}
]

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
      backgroundColor: '#ffffff33',
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



const useStyles = makeStyles(() => ({
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0px 24px',
        height: 48,
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        fontWeight: 'bold'
    },
    tbCell: {
        color: 'white',
        border: '1px solid #ffffff1f'
    },
    button: {
        backgroundColor: '#ffffff20',
        border: '1px solid #ffffff1f',
        marginTop: 10
    }
}));

function Layer4App(props)
{
    const dispatch = useDispatch();
    // const widgets = useSelector(({layer4App}) => layer4App.widgets);

    const classes = useStyles(props);
    const pageLayout = useRef(null);

    // useEffect(() => {
    //     dispatch(Actions.getWidgets());
    // }, [dispatch]);

    function handleSubmit(event)
    {
    }

    return (
        <FusePageSimple
            content={
                <React.Fragment>
                    <Card elevation={1} className="flex flex-col text-white mb-24" style={{backgroundColor: '#00000033'}}>
                        <div className={classes.cardHeader}>
                            <Typography className="font-medium truncate" color="inherit">LAYER 4 ATTACK PANEL</Typography>
                        </div>
                        <CardContent className='p-20'>
                            <form noValidate onSubmit={handleSubmit}>
                                <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                    <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                        <Typography className="font-medium truncate" color="inherit">TARGET (IPV4)</Typography>
                                    </div>
                                    <BootstrapInput className="w-full" defaultValue="" id="bootstrap-input" />
                                </FormControl>
                                <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                    <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                        <Typography className="font-medium truncate" color="inherit">TIME (SECONDS)</Typography>
                                    </div>
                                    <BootstrapInput type="number" className="w-full" defaultValue="" id="bootstrap-input" />
                                </FormControl>
                                <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                    <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                        <Typography className="font-medium truncate" color="inherit">PORT (LIST)</Typography>
                                    </div>
                                    <BootstrapInput type="number" className="w-full" defaultValue="" id="bootstrap-input" />
                                </FormControl>

                                <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                    <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                        <Typography className="font-medium truncate" color="inherit">PREMIUM MODE</Typography>
                                    </div>
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                        // value={age}
                                        // onChange={handleChange}
                                        input={<BootstrapInput />}
                                        >
                                        <option value={10} style={{backgroundColor: 'black'}}>Disabled</option>
                                        <option value={20} style={{backgroundColor: 'black'}}>Enabled</option>
                                    </NativeSelect>
                                </FormControl>

                                <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                    <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                        <Typography className="font-medium truncate" color="inherit">ATTACK METHOD</Typography>
                                    </div>
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                        // value={age}
                                        // onChange={handleChange}
                                        input={<BootstrapInput />}
                                        >
                                        <option value={10} style={{backgroundColor: 'black'}}>UDP-NTP</option>
                                        <option value={20} style={{backgroundColor: 'black'}}>UDP-SSDP</option>
                                        <option value={20} style={{backgroundColor: 'black'}}>UDP-SNMP</option>
                                        <option value={20} style={{backgroundColor: 'black'}}>UDP-MSSQL</option>
                                        <option value={20} style={{backgroundColor: 'black'}}>[PREMIUM] UDP-CLDAP</option>
                                        <option value={20} style={{backgroundColor: 'black'}}>[PREMIUM] UDP-CHARGEN</option>
                                        <option value={20} style={{backgroundColor: 'black'}}>[PREMIUM] UDP-SENTINEL</option>
                                        <option value={20} style={{backgroundColor: 'black'}}>[PREMIUM] TCP-VOX</option>
                                        <option value={20} style={{backgroundColor: 'black'}}>[PREMIUM] TCP-IMP</option>
                                        <option value={20} style={{backgroundColor: 'black'}}>[PREMIUM] [INSANE] TCP-BYPASS</option>
                                        <option value={20} style={{backgroundColor: 'black'}}>[PREMIUM] [INSANE] UDP-BYPASS</option>
                                    </NativeSelect>
                                </FormControl>

                                <Button variant="contained" color="secondary" className={classes.button}>
                                    <Icon>flash_on</Icon>
                                    Attack
                                </Button>
                            </form>

                        </CardContent>
                    </Card>

                    <Card elevation={1} className="flex flex-col text-white mb-24" style={{backgroundColor: '#00000033'}}>
                        <div className={classes.cardHeader}>
                            <Typography className="font-medium truncate" color="inherit">RUNNING ATTACKS</Typography>
                        </div>
                        <CardContent className='p-20'>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.tbCell} align="center">Target</TableCell>
                                        <TableCell className={classes.tbCell} align="center">Method</TableCell>
                                        <TableCell className={classes.tbCell} align="center">Time</TableCell>
                                        <TableCell className={classes.tbCell} align="center">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {tableData1.map(row => (
                                    <TableRow key={row.item}>
                                        <TableCell align="center" component="th" scope="row" className={classes.tbCell}>None</TableCell>
                                        <TableCell align="center" className={classes.tbCell}>None</TableCell>
                                        <TableCell align="center" className={classes.tbCell}>None</TableCell>
                                        <TableCell align="center" className={classes.tbCell}>None</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </React.Fragment>
            }
            ref={pageLayout}
        />
    );
}

export default withReducer('layer4App', reducer)(Layer4App);
