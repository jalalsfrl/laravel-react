import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import {FuseLayouts} from '@fuse';
import _ from '@lodash';
import {withRouter} from 'react-router-dom';
import {matchRoutes} from 'react-router-config'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from 'app/store/actions';
import AppContext from 'app/AppContext';
import {generateSettings} from 'app/store/reducers/fuse/settings.reducer';
import axios from "axios";
import {FuseUtils} from '@fuse';
import {API_URL} from '@fuse/urlConfig'


const styles = theme => ({
    root: {
        backgroundColor                   : theme.palette.background.default,
        color                             : theme.palette.text.primary,
        '& code:not([class*="language-"])': {
            color          : theme.palette.secondary.dark,
            backgroundColor: '#F5F5F5',
            padding        : '2px 3px',
            borderRadius   : 2,
            lineHeight     : 1.7
        },
        '& table.simple tbody tr td'      : {
            borderColor: theme.palette.divider
        },
        '& table.simple thead tr th'      : {
            borderColor: theme.palette.divider
        },
        '& a:not([role=button])'          : {
            color         : theme.palette.secondary.main,
            textDecoration: 'none',
            '&:hover'     : {
                textDecoration: 'underline'
            }
        },
        '& [class^="border-"]'            : {
            borderColor: theme.palette.divider
        },
        '& [class*="border-"]'            : {
            borderColor: theme.palette.divider
        }
    }
});

class FuseLayout extends Component {

    constructor(props, context)
    {
        super(props);
        const {routes} = context;
        this.state = {
            awaitRender: false,
            routes
        };
    }
    static getDerivedStateFromProps(props, state)
    {
        const {pathname} = props.location;

        const matched = matchRoutes(state.routes, pathname)[0];

        let newSettings = props.settings;



        if ( state.pathname !== pathname )
        {
            if ( matched && matched.route.settings )
            {
                const routeSettings = matched.route.settings;

                newSettings = generateSettings(props.defaultSettings, routeSettings);

                if ( !_.isEqual(props.settings, newSettings) )
                {
                    props.setSettings(newSettings);
                }
            }
            else
            {
                if ( !_.isEqual(props.settings, props.defaultSettings) )
                {
                    newSettings = _.merge({}, props.defaultSettings);

                    props.resetSettings();
                }
            }
        }



        return {
            awaitRender: !_.isEqual(props.settings, newSettings),
            pathname
        }
    }


    componentDidMount() {
        console.log('fuselayout');
        var id ="userhub";
        var item = {
            title:"Ddfdfdf"
        };
        var result;

        axios.get(API_URL+"/api/menu")
            .then(response=>{
                    const menu = response.data;
                    console.log(menu);
                    var result = this.props.navbigation;
                    menu.map(submenu=> {
                        id = submenu.id;
                        item = {
                            title: submenu.chinese
                        };
                        result = FuseUtils.updateNavItem(result, id, item);
                    });
                    console.log(result);
                    var prev = this.props.navbigation;
                    console.log(prev);
                    console.log(_.isEqual(result, prev));
                    if(!_.isEqual(result, prev)) {
                        this.props.setNavigation(result);
                    }

                }
            )
            .catch(error=>console.log(error)
            );

        axios.get(API_URL+"/api/auth")
            .then(response=>{
                    var result = response.data;

                    console.log(result);

                    var prev = this.props.auth_info;
                    console.log(prev);

                    console.log(_.isEqual(result, prev));
                    if(!_.isEqual(result, prev)) {
                        console.log("here");

                        this.props.setAuth_info(result);
                    }

                }
            )
            .catch(error=>console.log(error));
        axios.get(API_URL+"/api/auth")
            .then(response=>{
                    var result = response.data;

                    console.log(result);

                    var prev = this.props.auth_info;
                    console.log(prev);

                    console.log(_.isEqual(result, prev));
                    if(!_.isEqual(result, prev)) {
                        console.log("here");

                        this.props.setAuth_info(result);
                    }

                }
            )
            .catch(error=>console.log(error));

        axios.get(API_URL+"/api/dashboard")
            .then(response=>{
                    var result = response.data;
                    console.log(result);
                    var prev = this.props.pack_info;
                    console.log(prev);
                    console.log(_.isEqual(result, prev));
                    if(!_.isEqual(result, prev)) {
                        console.log("here");
                        this.props.setDash_info(result);
                    }

                }
            )
            .catch(error=>console.log(error));
        axios.get(API_URL+"/api/package")
            .then(response=>{
                    var result = response.data;
                    console.log(result);
                    var prev = this.props.pack_info;
                    console.log(prev);
                    console.log(_.isEqual(result, prev));
                    if(!_.isEqual(result, prev)) {
                        console.log("here");
                        this.props.setPack_info(result);
                    }

                }
            )
            .catch(error=>console.log(error));
    }


    render()
    {
        const {settings, classes} = this.props;
        //////////////////////////////////////

        ///////////////////////////////////////////
        // console.warn('FuseLayout:: rendered');
        const Layout = FuseLayouts[settings.layout.style];

        return !this.state.awaitRender ? <Layout classes={{root: classes.root}} {...this.props}/> : null;
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        setSettings  : Actions.setSettings,
        resetSettings: Actions.resetSettings,
        setNavigation : Actions.setNavigation,
        setAuth_info : Actions.setAuth_info,
        setDash_info : Actions.setDash_info,
        setPack_info: Actions.setPack_info

    }, dispatch);
}

function mapStateToProps({fuse})
{
    return {
        defaultSettings: fuse.settings.defaults,
        settings       : fuse.settings.current,
        navbigation     : fuse.navigation,
        auth_info      : fuse.auth_info,
        dash_info       : fuse.dash_info,
        pack_info       :fuse.pack_info
    }
}

FuseLayout.contextType = AppContext;

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(React.memo(FuseLayout))));

