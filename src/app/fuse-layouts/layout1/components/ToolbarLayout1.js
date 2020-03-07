import React from 'react';
import {AppBar, Hidden, Toolbar, Icon} from '@material-ui/core';
import {makeStyles, ThemeProvider} from '@material-ui/styles';
// import {FuseSearch, FuseShortcuts} from '@fuse';
import NavbarFoldedToggleButton from 'app/fuse-layouts/shared-components/NavbarFoldedToggleButton';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import UserMenu from 'app/fuse-layouts/shared-components/UserMenu';
import {useSelector} from 'react-redux';

const useStyles = makeStyles(theme => ({
    toolbar: {
        display: 'flex',
        position: 'relative',
        zIndex: 10,
        backgroundColor: '#00000033'
    }
}));

function ToolbarLayout1(props)
{
    const config = useSelector(({fuse}) => fuse.settings.current.layout.config);
    const toolbarTheme = useSelector(({fuse}) => fuse.settings.toolbarTheme);

    const classes = useStyles(props);

    return (
        <ThemeProvider theme={toolbarTheme}>
            <AppBar id="fuse-toolbar" className={classes.toolbar} color="default">
                <Toolbar className="p-0 transparent">
                    <div className="flex flex-1" style={{color: 'white'}}>
                        <Hidden mdDown>
                            <NavbarFoldedToggleButton className="w-64 h-64 p-0"/>
                        </Hidden>
                        <Hidden lgUp>
                            <NavbarMobileToggleButton className="w-64 h-64 p-0"/>
                        </Hidden>
                    </div>

                    <div className="flex">
                        <UserMenu/>
                        {/* <FuseSearch/> */}
                    </div>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default ToolbarLayout1;
