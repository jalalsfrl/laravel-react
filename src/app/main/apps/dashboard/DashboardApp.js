import React, {useEffect, useRef, useState} from 'react';
import {FuseAnimateGroup, FusePageSimple} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions'
import reducer from './store/reducers';
import _ from 'lodash';
import Widget1 from './widgets/Widget1';
import {makeStyles} from '@material-ui/styles';

import {
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@material-ui/core';


const widgetData = [
    {label: 'Total Users', count: 3510, icon: 'person_add'},
    {label: 'Total Attacks', count: 120543, icon: 'wifi'},
    {label: 'Running Attacks', count: 30, icon: 'flash_on'}
];

const tableData1 = [
    {item: 'HTTP-SPAM [GET]', desc: 'Method that sends a high amount of GET requests per second. Effective against websites with high resources.'},
    {item: 'HTTP-SPAM [POST]', desc: 'Method that sends a high amount of POST requests per second. Effective against websites with high resources.'},
    {item: '[PREMIUM] MULTI-BYPASS', desc: 'Advanced attack method that bypasses javascript challenges by using a using a headless browser to emulate a real visitor, automatically detecting the DDoS protection and bypasses it. Effective against: Blazingfast, OVH-UAM, Cloudflare UAM, Cloudflare Captcha, DDOS-Guard, Sucuri WAF and A LOT more JS challenges and mitigations. Sends over 200,000 rqps and has a very very high stability. One of our best methods.'},
    {item: '[PREMIUM] HTTP-CAPTCHA', desc: 'Method that bypasses Cloudflare CAPTCHA mode.'}
]
const tableData2 = [
    {item: 'UDP-NTP', desc: 'UDP method that uses vulnerable servers to amplify the size of the attack and masking the server IP, making it powerful and untraceable.'},
    {item: 'UDP-SSDP', desc: 'UDP method that uses vulnerable servers to amplify the size of the attack and masking the server IP, making it powerful and untraceable.'},
    {item: 'UDP-SNMP', desc: 'UDP method that uses vulnerable servers to amplify the size of the attack and masking the server IP, making it powerful and untraceable.'},
    {item: 'UDP-MSSQL', desc: 'UDP method that uses vulnerable servers to amplify the size of the attack and masking the server IP, making it powerful and untraceable.'},
    {item: '[PREMIUM] UDP-CLDAP', desc: 'UDP method that uses vulnerable servers to amplify the size of the attack and masking the server IP, making it powerful and untraceable.'},
    // {item: '[PREMIUM] UDP-CHARGEN', desc: 'UDP method that uses vulnerable servers to amplify the size of the attack and masking the server IP, making it powerful and untraceable.'},
    {item: '[PREMIUM] UDP-SENTINEL', desc: 'UDP method that uses vulnerable servers to amplify the size of the attack and masking the server IP, making it powerful and untraceable.'},
    {item: '[PREMIUM] TCP-VOX', desc: ''},
    {item: '[PREMIUM] TCP-KYS', desc: ''},
    {item: '[PREMIUM] [INSANE] TCP-BYPASS', desc: 'TCP Bypass method performing valid TCP 3 way syn-ack handshakes, capable of bypassing OVH, Amazon, Digital Ocean and other popular hosts. MUST BE USED ON OPEN TCP PORT.'},
    {item: '[PREMIUM] [INSANE] UDP-BYPASS', desc: 'UDP bypass method, use it on open UDP port, good against game servers.'}
]

const useStyles = makeStyles(() => ({
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0px 24px',
        height: 48,
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        fontWeight: 'bold'
    },
    listItem: {
        display: 'block',
        backgroundColor: '#00000033',
        border: '1px solid #ffffff1f'
    },
    tbCell: {
        color: 'white',
        border: '1px solid #ffffff1f'
    }
}));

function DashboardApp(props)
{
    const dispatch = useDispatch();
    // const widgets = useSelector(({dashboardApp}) => dashboardApp.widgets);
    const dash_info = useSelector(({fuse}) => fuse.dash_info);
    console.log(dash_info);

    const classes = useStyles(props);
    const pageLayout = useRef(null);

    // useEffect(() => {
    //     dispatch(Actions.getWidgets());
    // }, [dispatch]);
    widgetData[0].label = dash_info[0].chinese;
    widgetData[1].label = dash_info[1].chinese;
    widgetData[2].label = dash_info[2].chinese;
    for(let i=0; i<tableData1.length; i++){
        tableData1[i].item = dash_info[15+i*2].chinese;
        tableData1[i].desc = dash_info[16+i*2].chinese;
    }
    for(let i=0; i<tableData2.length; i++){
        tableData2[i].item = dash_info[24+i*2].chinese;
        tableData2[i].desc = dash_info[25+i*2].chinese;
    }

    return (
        <FusePageSimple
            content={
                <React.Fragment>
                    <FuseAnimateGroup
                        className="flex flex-wrap pb-12"
                        enter={{
                            animation: "transition.slideUpBigIn"
                        }}
                    >
                        {widgetData.map((data, index) => (
                            <div key={index} className="widget flex w-full md:w-1/3 p-12">
                                <Widget1 widget={data}/>
                            </div>
                        ))}
                    </FuseAnimateGroup>

                    <Card elevation={1} className="flex flex-col text-white mb-24" style={{backgroundColor: '#00000033'}}>
                        <div className={classes.cardHeader}>
                            <Typography className="font-medium truncate" color="inherit">{dash_info[3].chinese}</Typography>
                        </div>
                        <CardContent className='p-20'>
                            <List>
                                <ListItem className={classes.listItem}>
                                    <div className='flex w-full h-36'>
                                        <h2>{dash_info[4].chinese}</h2>
                                        <p className='ml-auto'>16-11-2019</p>
                                    </div>
                                    <p style={{color: 'yellow'}}>{dash_info[5].chinese}</p>
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <div className='flex w-full h-36'>
                                        <h2>{dash_info[6].chinese}</h2>
                                        <p className='ml-auto'>16-11-2019</p>
                                    </div>
                                    <p style={{color: 'yellow'}}>{dash_info[7].chinese}</p>
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <div className='flex w-full h-36'>
                                        <h2></h2>
                                        <p className='ml-auto'>16-11-2019</p>
                                    </div>
                                    <p style={{color: '#0cff00'}}>{dash_info[8].chinese}</p>
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <div className='flex w-full h-36'>
                                        <h2>{dash_info[9].chinese}</h2>
                                        <p className='ml-auto'>16-11-2019</p>
                                    </div>
                                    {/*<p style={{color: 'green'}}>Updates of the day:</p>*/}
                                    {/*<p>- Fixed L4 UDP methods</p>*/}
                                    {/*<p>- Added 2 slots L4 bypass methods</p>*/}
                                    {/*<p>- Added CAPTCHA bypass method (L7)</p>*/}
                                    {/*<p style={{color: 'red'}}>Updates to come:</p>*/}
                                    {/*<p>- More L4 methods</p>*/}
                                    {/*<p>- More L7 power (and possibly methods)</p>*/}
                                    {/*<p>- L4 api</p>*/}
                                    {/*<p>- Ability to stop L4 bypass methods</p>*/}
                                    {/*<p>More?.</p>*/}
                                    <p>{dash_info[10].chinese}</p>
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <div className='flex w-full h-36'>
                                        <h2>{dash_info[11].chinese}</h2>
                                        <p className='ml-auto'>16-11-2019</p>
                                    </div>
                                    <p style={{color: 'red'}}>{dash_info[12].chinese}</p>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>

                    <Card elevation={1} className="flex flex-col text-white mb-24" style={{backgroundColor: '#00000033'}}>
                        <div className={classes.cardHeader}>
                            <Typography className="font-medium truncate" color="inherit">{dash_info[13].chinese}</Typography>
                        </div>
                        <CardContent className='p-20'>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.tbCell}></TableCell>
                                        <TableCell className={classes.tbCell} align="center">{dash_info[14].chinese}</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {tableData1.map(row => (
                                    <TableRow key={row.item}>
                                        <TableCell align="center" component="th" scope="row" className={classes.tbCell}>
                                            {row.item}
                                        </TableCell>
                                        <TableCell className={classes.tbCell}>{row.desc}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    <Card elevation={1} className="flex flex-col text-white mb-24" style={{backgroundColor: '#00000033'}}>
                        <div className={classes.cardHeader}>
                            <Typography className="font-medium truncate" color="inherit">{dash_info[23].chinese}</Typography>
                        </div>
                        <CardContent className='p-20'>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.tbCell}></TableCell>
                                        <TableCell className={classes.tbCell} align="center">{dash_info[14].chinese}</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {tableData2.map(row => (
                                    <TableRow key={row.item}>
                                        <TableCell align="center" component="th" scope="row" className={classes.tbCell}>
                                            {row.item}
                                        </TableCell>
                                        <TableCell className={classes.tbCell}>{row.desc}</TableCell>
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

export default withReducer('dashboardApp', reducer)(DashboardApp);
