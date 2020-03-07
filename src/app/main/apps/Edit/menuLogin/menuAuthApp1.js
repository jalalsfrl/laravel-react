import React, {useRef, useState, Component} from 'react';
import {useDispatch, State, useSelector, connect} from 'react-redux';
import axios from 'axios';
import {FuseUtils} from '@fuse';
import {makeStyles} from '@material-ui/styles';
import {
    Button,
    Card,
    CardContent,
    FormControl,
    Grid,
    Icon,
    InputBase,
    TextField,
    Typography,
    withStyles
} from '@material-ui/core';

import {fade} from "@material-ui/core/styles";

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

export default class MenuAuthApp extends Component{
    constructor(props) {
        super(props);

        this.onChangeHandle = this.onChangeHandle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            userhub:'',
            dashboard:'',
            packages:'',
            layer4:'',
            layer7:'',
            custom:'',
            api_manager:'',
            extra:'',
            support:'',
            telegram:'',
            showoff:'',
            User:'',
            password:'',
            login:'',
            have_an_account:'',
            Create_an_account:'',
            profile:'',
            purchase:'',
            support_pro:'',
            logout:'',
            register:'',
            admin:'',

            temp:[]
        };
    }

    componentDidMount() {
        console.log('mount');
        axios.get(API_URL+"/api/menu-auth")
            .then(response=>{
                const menuinit =  response.data;
                console.log("menuinit");
                console.log(menuinit);
                this.setState({
                    menu: menuinit[0]['chinese'],
                    temp: menuinit
                   })
            })
            .catch(error=>console.log(error));
    }

    onChangeHandle(e) {
        e.preventDefault();
        const temp1 = this.state.temp;
        console.log(e.target.name);
        temp1.map(tempindex =>{
            if(tempindex['id'] === e.target.value) {
                tempindex['chinese'] =  e.target.value;
            }
        });

        this.setState({
            temp : temp1
            }
         );
    }

    onSubmit(e)
    {
        e.preventDefault();


        axios.post('http://hkfblikes.com/api/public/api/menu-auth/', this.state.temp)
            .then(response => {
                    const menu = response.data;
                    console.log(menu);
                }
            )
            .catch(error=>console.log(error)
            );

    }

    render() {
        return(
            <React.Fragment>
                <form noValidate  name="fjdkkak" onSubmit={this.onSubmit}>

                    <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                        <Typography className="font-medium truncate" color="inherit">USER
                            HUB</Typography>
                    </div>

                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Card elevation={1} className="flex flex-col text-white mb-24"
                                  style={{backgroundColor: '#00000033'}}>
                                    <div >
                                        <Typography className="font-medium truncate" color="inherit">Menu</Typography>
                                    </div>
                                <CardContent className='p-20'>

                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate" color="inherit">USER
                                                HUB</Typography>
                                        </div>
                                        {/*<BootstrapInput type='text' className="w-full" name="userhub"  value={this.state.temp[0]['chinese']}  onChange={this.onChangeHandle}  variant="outlined"/>*/}
                                    </FormControl>

                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate"
                                                        color="inherit">dashboard</Typography>
                                        </div>
                                        <BootstrapInput className="w-full"  name="userhub" value={this.state.userhub}  onChange={this.onChangeHandle}   />
                                    </FormControl>
                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate"
                                                        color="inherit">Packages</Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>
                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate" color="inherit">DDOS
                                                Panel</Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>
                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate" color="inherit">&nbsp;&nbsp; Layer
                                                4(IPv4)</Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>
                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate" color="inherit">&nbsp;&nbsp; Layer
                                                7 (Websites)</Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>
                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate" color="inherit">&nbsp;&nbsp; Layer
                                                7 (Custom)</Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>
                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate" color="inherit">API
                                                Manager</Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>
                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate" color="inherit">Extra</Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>
                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate"
                                                        color="inherit">Support</Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>
                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate"
                                                        color="inherit">ShowOff</Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>
                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate"
                                                        color="inherit">Telegram</Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>


                                </CardContent>
                            </Card>

                        </Grid>
                        <Grid item xs={6}>

                            <Card elevation={1} className="flex flex-col text-white mb-24"
                                  style={{backgroundColor: '#00000033'}}>
                                <div >
                                    <Typography className="font-medium truncate" color="inherit">Auth</Typography>
                                </div>
                                <CardContent className='p-20'>

                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate" color="inherit">User</Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>
                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate"
                                                        color="inherit">Password</Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>
                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate" color="inherit">Login</Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>
                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate" color="inherit">Don't have an
                                                account?
                                            </Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>
                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate" color="inherit">Create an
                                                account</Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>
                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate"
                                                        color="inherit">Profile</Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>
                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate"
                                                        color="inherit">Purchase</Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>
                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate"
                                                        color="inherit">Support</Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>
                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate" color="inherit">Logout</Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>
                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate"
                                                        color="inherit">Register</Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>
                                    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                            <Typography className="font-medium truncate" color="inherit">admin</Typography>
                                        </div>
                                        <BootstrapInput className="w-full" defaultValue=""  />
                                    </FormControl>

                                    <Button margin-top='49px' variant="contained" color="secondary"
                                              type='submit'>
                                        <Icon>save</Icon>
                                        &nbsp; save
                                    </Button>

                                </CardContent>
                            </Card>


                        </Grid>

                    </Grid>
                </form>

            </React.Fragment>
        )
    }
}

