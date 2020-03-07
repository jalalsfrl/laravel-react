import React, {useContext} from 'react';
import {renderRoutes} from 'react-router-config'
import {FuseScrollbars, FuseMessage, FuseDialog, FuseSuspense} from '@fuse';
import {makeStyles} from '@material-ui/styles';
import {useDispatch, useSelector} from 'react-redux';
import ToolbarLayout1 from './components/ToolbarLayout1';
import NavbarWrapperLayout1 from './components/NavbarWrapperLayout1';
import SettingsPanel from 'app/fuse-layouts/shared-components/SettingsPanel';
import QuickPanel from 'app/fuse-layouts/shared-components/quickPanel/QuickPanel';
import clsx from 'clsx';
import AppContext from 'app/AppContext';
import {SET_NAVIGATION} from "../../store/actions/fuse";
import {FuseUtils} from '@fuse';
import axios from "axios";


const useStyles = makeStyles(theme => ({
    root          : {
        position          : 'relative',
        display           : 'flex',
        flexDirection     : 'row',
        width             : '100%',
        height            : '100%',
        overflow          : 'hidden',
        backgroundColor   : theme.palette.background.default,
        color             : theme.palette.text.primary,
        '&.boxed'         : {
            maxWidth : 1280,
            margin   : '0 auto',
            boxShadow: theme.shadows[3]
        },
        '&.scroll-body'   : {
            '& $wrapper'       : {
                height  : 'auto',
                flex    : '0 0 auto',
                overflow: 'auto'
            },
            '& $contentWrapper': {},
            '& $content'       : {}
        },
        '&.scroll-content': {
            '& $wrapper'       : {},
            '& $contentWrapper': {},
            '& $content'       : {}
        },
        '& .navigation'   : {
            '& .list-subheader-text, & .list-item-text, & .item-badge, & .arrow-icon': {
                transition: theme.transitions.create('opacity', {
                    duration: theme.transitions.duration.shortest,
                    easing  : theme.transitions.easing.easeInOut
                })
            },
        }
    },
    wrapper       : {
        display : 'flex',
        position: 'relative',
        width   : '100%',
        height  : '100%',
        flex    : '1 1 auto',
    },
    contentWrapper: {
        display      : 'flex',
        flexDirection: 'column',
        position     : 'relative',
        zIndex       : 3,
        overflow     : 'hidden',
        flex         : '1 1 auto'
    },
    content       : {
        position                    : 'relative',
        display                     : 'flex',
        overflow                    : 'auto',
        flex                        : '1 1 auto',
        flexDirection               : 'column',
        width                       : '100%',
        '-webkit-overflow-scrolling': 'touch',
        zIndex                      : 2,
        padding                     : 10
    }
}));

function Layout1(props)
{
    const config = useSelector(({fuse}) => fuse.settings.current.layout.config);
    const appContext = useContext(AppContext);
    const classes = useStyles(props);
    const { settings } = props;
    const {routes} = appContext;
    ////////////////

    // console.warn('FuseLayout:: rendered');
    return (
        <div id="fuse-layout" className={clsx(classes.root, 'scroll-content')} style={{backgroundImage: settings.back}}>
            <div className="flex flex-1 flex-col overflow-hidden relative">
                <div className={classes.wrapper}>
                    {config.navbar.display && (
                        <NavbarWrapperLayout1/>
                    )}
                    <div className={classes.contentWrapper}>
                        {config.toolbar.display && (
                            <ToolbarLayout1/>
                        )}

                        <FuseScrollbars className={classes.content} scrollToTopOnRouteChange>
                            <FuseDialog/>
                            <FuseSuspense>
                                {renderRoutes(routes)}
                            </FuseSuspense>
                            {props.children}
                        </FuseScrollbars>
                        <SettingsPanel/>
                    </div>
                </div>
            </div>

            <FuseMessage/>
        </div>
    )
}

export default Layout1;
