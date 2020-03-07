import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Card, CardContent, TextField} from '@material-ui/core';
import {makeStyles, withStyles} from '@material-ui/styles';
import {FuseAnimate} from '@fuse';
import withReducer from 'app/store/withReducer';
import * as authActions from 'app/auth/store/actions';
import reducer from './store/reducers';
import {useForm} from '@fuse/hooks';
import {Link} from 'react-router-dom';


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

const ColorButton = withStyles(theme => ({
    root: {
        color: '#fff',//theme.palette.getContrastText(purple[500]),
        backgroundColor: '#ffffff20',//purple[500],
        '&:hover': {
            backgroundColor: '#ffffff3d',//purple[700],
        },
        '&:disabled': {
            color: '#929292',
            backgroundColor: '#ffffff12',//purple[700],
        },
    },
}))(Button);

function Login(props)
{
    const dispatch = useDispatch();
    const login = useSelector(({auth}) => auth.login);
    const auth_info = useSelector(({fuse}) => fuse.auth_info);
    console.log(auth_info);
    useEffect(() => {
        if ( login.error && (login.error.email || login.error.password) )
        {
            console.log(login.error);
        }
    }, [login.error]);

    const {form, handleChange, resetForm} = useForm({
        email   : '',
        password: ''
    });

    function isFormValid()
    {
        return (
            form.email.length > 0 &&
            form.password.length > 0
        );
    }

    function handleSubmit(model)
    {
        dispatch(authActions.submitLogin(form));

    };


    return (
        <div className="flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32" >

            <div className="flex flex-col items-center justify-center w-full">

                <FuseAnimate animation="transition.expandIn">

                    <Card className="w-full max-w-384 bg-transparent">

                        <CardContent className="flex flex-col items-center justify-center p-32" style={{backgroundColor: '#00000033'}}>

                            <img className="w-128 mb-24" src="assets/images/logo.png" alt="logo"/>

                            {/* <Typography variant="h6" className="mt-16 mb-32">LOGIN TO YOUR ACCOUNT</Typography> */}

                            <form
                                name="loginForm"

                                className="flex flex-col justify-center w-full"
                                onSubmit={handleSubmit}
                            >

                                <CssTextField
                                    className="mb-16"
                                    // label="Email"
                                    autoFocus
                                    type="text"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />

                                <CssTextField
                                    className="mb-16"
                                    // label="Password"
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />


                                <ColorButton
                                    variant="contained" color="primary"
                                    className="w-full mx-auto mt-16 mb-10"
                                    aria-label="LOG IN"
                                    disabled={!isFormValid()}
                                    type="submit"
                                >
                                    {auth_info[2].chinese}
                                </ColorButton>



                            </form>

                            <div className="flex flex-row items-center justify-center pt-24 pb-0 w-full" style={{borderTop: '1px solid #ffffff1f'}}>
                                <span className="font-medium mr-8" style={{color: '#fba540'}}>{auth_info[3].chinese}</span>
                                <Link className="font-medium" to="/register" style={{color: '#fff'}}>{auth_info[4].chinese}</Link>
                            </div>

                        </CardContent>
                    </Card>
                </FuseAnimate>
            </div>


        </div>
    );
}

export default withReducer('loginApp', reducer)(Login);
