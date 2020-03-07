import {FuseUtils} from '@fuse';
import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {useSelector, useDispatch} from 'react-redux';
import * as navbar_actions from 'app/store/actions/fuse/navbar.actions';
import {SET_NAVIGATION} from "../../../app/store/actions/fuse";


function FuseTheme(props)
{

    const mainTheme = useSelector(({fuse}) => fuse.settings.mainTheme);
    // console.warn('FuseTheme:: rendered',mainTheme);
    return (

        <ThemeProvider theme={mainTheme}>
            {props.children}
        </ThemeProvider>
    )
}

export default React.memo(FuseTheme);
