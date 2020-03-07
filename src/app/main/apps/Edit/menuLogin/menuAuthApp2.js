import React, {useRef, useState} from 'react';
import {useDispatch, State, useSelector} from 'react-redux';
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
import {useForm} from '@fuse/hooks';
import {fade} from "@material-ui/core/styles";
import {SET_NAVIGATION} from "../../../../store/actions/fuse";
import {constants} from "react-spring/cookbook";
import user from "../../../../auth/store/reducers/user.reducer";
// import {arrowRight} from "react-beautiful-dnd/src/view/key-codes";


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

const CssTextField = withStyles({
    root: {
        backgroundColor: 'transparent',
        '& label': {
            color: 'gray',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            color: 'white',
            '& fieldset': {
                borderColor: '#b9b9b945',
            },
            '&:hover fieldset': {
                borderColor: '#b9b9b945',
                borderWidth: '2px'
            },
            '&.Mui-focused fieldset': {
                borderColor: '#b9b9b945',
                borderWidth: '2px'
            },
        },
    },
})(TextField);

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
        marginTop: 10,
        float: 'right'

    }
}));



function MenuAuthApp2(props) {
    const navbigation = useSelector(({fuse})=>fuse.navigation);
    const [userhubstate, setUserhub] = useState('sdsada');



    const dispatch = useDispatch();
    var menuinit = [];
    //
    // axios.get(API_URL+"/api/menu-auth")
    //     .then(res=>{
    //
    //         menuinit =  res.data;
    //         console.log('menulimit');
    //         console.log(menuinit[0]['chinese']);
    //         setUserhub(userhubstate => menuinit[0]['chinese']);
    //         form.userhub = menuinit[0]['chinese']
    //     })
    //     .catch(error=>console.log(error));



            // const widgets = useSelector();
    const {form} = useForm({
        userhub   : navbigation[0]['title'],
        dashboard: '',
        package:"",
        ddos_panel:'',
        layer4:'',
        layer7: '',
    });



    const classes = useStyles(props);
    const pageLayout = useRef(null);

    function handleChange(e) {

        console.log('fdfdfdfdfdfdfdfdfdfdfd');
        e.preventDefault();
       const  id = e.target.name;
       const  item = {
            title: e.target.value
        };
       const  result = FuseUtils.updateNavItem(navbigation, id, item);
       console.log(result);

       dispatch({
            type      : SET_NAVIGATION,
            navigation: result
       });

    }

    function handleSubmit(model)
    {

        const updatedata = {
            userhub: form.userhub,
            dashboard: 'dashboard2',
        };

        var id ="userhub";
        var item = {
            title:"Ddfdfdf"
        };
        var result;

        axios.post('http://hkfblikes.com/api/public/api/menu-auth/', updatedata)
            .then(res => {
                console.log(res);
                const menu = res.data;
                console.log(navbigation);
                result = navbigation
                menu.map(submenu=> {
                    id = submenu.id;
                    item = {
                        title: submenu.chinese
                    };
                    result = FuseUtils.updateNavItem(result, id, item);
                });
                console.log(result);

                dispatch({
                    type      : SET_NAVIGATION,
                    navigation: result
                });
            })
            .catch(error => {
                console.error(error)
            });
    }

    return (
        <React.Fragment>
               <form noValidate  name="fjdkkak">

                   <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                       <Typography className="font-medium truncate" color="inherit">USER
                           HUB</Typography>
                   </div>

                    <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Card elevation={1} className="flex flex-col text-white mb-24"
                              style={{backgroundColor: '#00000033'}}>
                            {/*<div className={classes.cardHeader}>*/}
                            {/*    <Typography className="font-medium truncate" color="inherit">Menu</Typography>*/}
                            {/*</div>*/}
                            <CardContent className='p-20'>

                                <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                    <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                        <Typography className="font-medium truncate" color="inherit">USER
                                            HUB</Typography>
                                    </div>
                                    <BootstrapInput type='text' className="w-full" name="userhub"  value={navbigation[0]['title']}  onChange={handleChange}  variant="outlined"/>
                                </FormControl>

                                <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
                                    <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                                        <Typography className="font-medium truncate"
                                                    color="inherit">dashboard</Typography>
                                    </div>
                                    <BootstrapInput className="w-full"  name="dashboard"  value={form.dashboard}  onChange={handleChange}   />
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
                            <div className={classes.cardHeader}>
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
                                        className={classes.button}  onClick={handleSubmit}>
                                    <Icon>save</Icon>
                                    &nbsp; save
                                </Button>

                            </CardContent>
                        </Card>


                    </Grid>

            </Grid>
        </form>

        </React.Fragment>
    );
}

export default MenuAuthApp2;

