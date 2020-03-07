import React, {useState} from 'react';
import {Drawer, Button, Typography, Dialog, Icon, IconButton, Slide} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';
import {red} from '@material-ui/core/colors';
import {FuseScrollbars, FuseSettings} from '@fuse';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
    root: {
        width: 260,
        overflow: 'unset',
        backgroundColor: '#000000',
    },
    button               : {
        position               : 'absolute',
        
        top                    : '24rem',
        minWidth               : 40,
        width                  : 40,
        height                 : 40,
        padding                : 0,
        borderBottomRightRadius: 0,
        borderTopRightRadius   : 0,
        zIndex                 : 999,
        color                  : '#fff',
        backgroundColor        : '#000',
        '&:hover'              : {
            backgroundColor: '#000',
        }
    },
    fixedBtn: {
        right                  : 0,
    },
    moveBtn: {
        left: -40
    },
    '@keyframes rotating': {
        from: {
            transform: 'rotate(0deg)'
        },
        to  : {
            transform: 'rotate(360deg)'
        }
    },
    buttonIcon           : {
        animation: '$rotating 1s linear infinite'
    },
    
}));

function SettingsPanel()
{
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            {!open && 
                <Button id="fuse-settings" className={clsx(classes.button, classes.fixedBtn)} variant="contained" onClick={handleOpen}>
                    <Icon className={classes.buttonIcon}>settings</Icon>
                </Button>
            }
                
            <Drawer
                classes={{paper: classes.root}}
                variant="persistent"
                open={open}
                anchor="right"
                // onClose={ev => dispatch(Actions.toggleQuickPanel())}
            >
                <Button id="fuse-settings" className={clsx(classes.button, classes.moveBtn)} variant="contained" onClick={handleClose}>
                    <Icon className={classes.buttonIcon}>settings</Icon>
                </Button>
                <FuseScrollbars>
                    <FuseSettings/>
                </FuseScrollbars>
            </Drawer>
        </React.Fragment>
    );
}

export default SettingsPanel;
