import React, {useState} from 'react';
import {Avatar, Button, Icon, ListItemIcon, ListItemText, Popover, MenuItem, Typography} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import * as authActions from 'app/auth/store/actions';
import {Link} from 'react-router-dom';

function UserMenu(props)
{
    const dispatch = useDispatch();
    const user = useSelector(({auth}) => auth.user);
    const auth_info = useSelector(({fuse}) => fuse.auth_info);
    const avatar = user.data.photoURL ? user.data.photoURL : 'assets/images/avatars/avatar_default.png';

    const [userMenu, setUserMenu] = useState(null);

    const userMenuClick = event => {
        setUserMenu(event.currentTarget);
    };

    const userMenuClose = () => {
        setUserMenu(null);
    };

    return (
        <React.Fragment>

            <Button className="h-64" onClick={userMenuClick}>
                {user.data.photoURL ?
                    (
                        <Avatar className="" alt="user photo" src={user.data.photoURL}/>
                    )
                    :
                    (
                        <Avatar className="" alt="user photo" src='assets/images/avatars/avatar_default.png'/>
                    )
                }
                

                {/* <Icon className="text-16 ml-12 hidden sm:flex" variant="action">keyboard_arrow_down</Icon> */}
            </Button>

            <Popover
                open={Boolean(userMenu)}
                anchorEl={userMenu}
                onClose={userMenuClose}
                anchorOrigin={{
                    vertical  : 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical  : 'top',
                    horizontal: 'center'
                }}
                classes={{
                    paper: "py-8 bg-black text-white",
                }}
                
            >
                {!user.role || user.role.length === 0 ? (
                    <React.Fragment>
                        <MenuItem component={Link} to="/login">
                            <ListItemIcon className="min-w-40 text-white">
                                <Icon>lock</Icon>
                            </ListItemIcon>
                            <ListItemText className="pl-0" primary="Login"/>
                        </MenuItem>
                        <MenuItem style={{borderTop: '1px solid #676767b0'}} component={Link} to="/register">
                            <ListItemIcon className="min-w-40 text-white">
                                <Icon>person_add</Icon>
                            </ListItemIcon>
                            <ListItemText className="pl-0" primary="Register"/>
                        </MenuItem>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <div className="flex p-16">
                            <Avatar style={{width: '50px', height: '50px'}} alt="user photo" src={avatar}/>
                            <div className="flex-col ml-12 mt-3">
                                <Typography component="span" className="normal-case font-600 flex">
                                    {user.data.displayName}
                                </Typography>
                                <Typography className="text-11 capitalize">
                                    {user.role.toString()}
                                </Typography>
                            </div>
                        </div>
                        <MenuItem style={{borderTop: '1px solid #676767b0'}} component={Link} to="/pages/profile" onClick={userMenuClose}>
                            <ListItemIcon className="min-w-40 text-white">
                                <Icon>account_circle</Icon>
                            </ListItemIcon>
                            <ListItemText className="pl-0" >{auth_info[5].chinese}</ListItemText>
                        </MenuItem>
                        <MenuItem style={{borderTop: '1px solid #676767b0'}} component={Link} to="/pages/profile" onClick={userMenuClose}>
                            <ListItemIcon className="min-w-40 text-white">
                                <Icon>account_balance_wallet</Icon>
                            </ListItemIcon>
                            <ListItemText className="pl-0" >{auth_info[6].chinese}</ListItemText>
                        </MenuItem>
                        <MenuItem style={{borderTop: '1px solid #676767b0'}} component={Link} to="/apps/mail" onClick={userMenuClose}>
                            <ListItemIcon className="min-w-40 text-white">
                                <Icon>mail</Icon>
                            </ListItemIcon>
                            <ListItemText className="pl-0" >{auth_info[7].chinese}</ListItemText>
                        </MenuItem>
                        <MenuItem
                            style={{borderTop: '1px solid #676767b0'}} 
                            onClick={() => {
                                dispatch(authActions.logoutUser());
                                userMenuClose();
                            }}
                        >
                            <ListItemIcon className="min-w-40 text-white">
                                <Icon>exit_to_app</Icon>
                            </ListItemIcon>
                            <ListItemText className="pl-0" >{auth_info[8].chinese}</ListItemText>
                        </MenuItem>
                    </React.Fragment>
                )}
            </Popover>
        </React.Fragment>
    );
}

export default UserMenu;
