import React from 'react';
import {AppBar, Hidden, Icon} from '@material-ui/core';
import {FuseScrollbars} from '@fuse';
import clsx from 'clsx';
import Logo from 'app/fuse-layouts/shared-components/Logo';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import Navigation from 'app/fuse-layouts/shared-components/Navigation';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    content: {
        overflowX                   : 'hidden',
        overflowY                   : 'auto',
        '-webkit-overflow-scrolling': 'touch',
        background                  : 'linear-gradient(rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 30%), linear-gradient(rgba(0, 0, 0, 0.25) 0, rgba(0, 0, 0, 0) 40%)',
        backgroundRepeat            : 'no-repeat',
        backgroundSize              : '100% 40px, 100% 10px',
        backgroundAttachment        : 'local, scroll'
    }
});

function NavbarLayout1(props)
{
    const classes = useStyles();

    return (
        <div className={clsx("flex flex-col overflow-hidden h-full", props.className)}>

            <AppBar
                color="primary"
                position="static"
                elevation={0}
                className="flex flex-row items-center flex-shrink h-64 min-h-64 pl-20 pr-12"
                style={{backgroundColor: '#00000033', borderBottom: '1px #ffffff38 solid'}}
            >
                <div className="flex flex-1 pr-8">
                    <Logo/>
                </div>
                <Hidden lgUp>
                    <NavbarMobileToggleButton className="w-40 h-40 p-0">
                        <Icon>arrow_back</Icon>
                    </NavbarMobileToggleButton>
                </Hidden>
            </AppBar>

            <FuseScrollbars className={clsx(classes.content)}>
                <Navigation layout="vertical"/>
            </FuseScrollbars>
        </div>
    );
}

export default NavbarLayout1;


