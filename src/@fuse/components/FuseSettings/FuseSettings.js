import React from 'react';
import {Typography, GridList, GridListTile} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import * as Actions from 'app/store/actions';
import * as AuthActions from 'app/auth/store/actions';
import {useSelector, useDispatch} from 'react-redux';
import {FuseLayoutConfigs} from '@fuse';
import clsx from 'clsx';
import _ from '@lodash';

const useStyles = makeStyles(theme => ({
    root : {
        textAlign: 'center',
        fontSize: 15,
        padding: 10
    },
    title: {
        color: '#ffffffd9',
        fontSize: 15,
        marginTop: 20
    },
    separator: {
        height         : 1,
        backgroundColor: '#ffffff38',
        margin: '16px 0px'
    },
    gridList: {
        width: 240,
        padding: '0px 0px 0px 25px'
    },
    gridTile: {
        width: 85,
        height: 75,
        margin: '0px 15px 15px 0px',
        borderRadius: 4,
        border: '0px',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center'
    },
}));

const imgThemes = [
    {id: 'root_back_1', back: 'url(../assets/images/bg-themes/1.png)'},
    {id: 'root_back_2', back: 'url(../assets/images/bg-themes/2.png)'},
    {id: 'root_back_3', back: 'url(../assets/images/bg-themes/3.png)'},
    {id: 'root_back_4', back: 'url(../assets/images/bg-themes/4.png)'},
    {id: 'root_back_5', back: 'url(../assets/images/bg-themes/5.png)'},
    {id: 'root_back_6', back: 'url(../assets/images/bg-themes/6.png)'}
]

const gradientThemes = [
    {id: 'root_back_7', back: 'linear-gradient(45deg, #0fd850, #f9f047)'},
    {id: 'root_back_8', back: 'linear-gradient(45deg, #6a11cb, #2575fc)'},
    {id: 'root_back_9', back: 'linear-gradient(45deg, #29323c, #485563)'},
    {id: 'root_back_10', back: 'linear-gradient(45deg, #bc4e9c, #f80759)'},
    {id: 'root_back_11', back: 'linear-gradient(45deg, #007adf, #00ecbc)'},
    {id: 'root_back_12', back: 'linear-gradient(45deg, #65379b, #886aea)'}
]

function FuseSettings(props)
{
    const dispatch = useDispatch();
    const user = useSelector(({auth}) => auth.user);
    const themes = useSelector(({fuse}) => fuse.settings.themes);
    const settings = useSelector(({fuse}) => fuse.settings.current);

    const classes = useStyles(props);

    function handleChangeTheme(id, back){
        
        const newSettings = {...settings, ...{back_id: id, back: back}}
        console.log(newSettings, 'updated setting');

        if ( user.role === 'guest' )
        {
            dispatch(Actions.setDefaultSettings(newSettings));
        }
        else
        {
            dispatch(AuthActions.updateUserSettings(newSettings));
        }
    }

    return (
        <div className={classes.root}>
            <Typography className={classes.title} color="textSecondary">
                Gaussion Texture
            </Typography>
            <div className={classes.separator}/>

            <GridList cellHeight={90} className={classes.gridList} cols={2}>
                {imgThemes.map(tile => (
                    <GridListTile key={tile.id}>
                        <div
                            className={classes.gridTile}
                            style={{backgroundImage: tile.back}}
                            onClick={e => handleChangeTheme(tile.id, tile.back)}/>
                    </GridListTile>
                ))}
            </GridList>

            <Typography className={classes.title} color="textSecondary">
                Gradient Background
            </Typography>
            <div className={classes.separator}/>
            
            <GridList cellHeight={90} className={classes.gridList} cols={2}>
                {gradientThemes.map(tile => (
                    <GridListTile key={tile.id}>
                        <div
                            className={classes.gridTile}
                            style={{backgroundImage: tile.back}}
                            onClick={e => handleChangeTheme(tile.id, tile.back)}/>
                    </GridListTile>
                ))}
            </GridList>

            {/* <div className={classes.formGroup}>

                <Typography className={classes.formGroupTitle} color="textSecondary">
                    Layout
                </Typography>

                <LayoutSelect/>

                <LayoutConfig/>

                <Typography className="my-16 text-12 italic" color="textSecondary">
                    *Not all option combinations are available
                </Typography>

            </div>

            <div className={clsx(classes.formGroup, "pb-16")}>

                <Typography className={classes.formGroupTitle} color="textSecondary">
                    Theme
                </Typography>

                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" className="text-14">Main</FormLabel>
                    <ThemeSelect value={settings.theme.main} name="theme.main" handleChange={handleChange}/>
                </FormControl>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" className="text-14">Navbar</FormLabel>
                    <ThemeSelect value={settings.theme.navbar} name="theme.navbar" handleChange={handleChange}/>
                </FormControl>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" className="text-14">Toolbar</FormLabel>
                    <ThemeSelect value={settings.theme.toolbar} name="theme.toolbar" handleChange={handleChange}/>
                </FormControl>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" className="text-14">Footer</FormLabel>
                    <ThemeSelect value={settings.theme.footer} name="theme.footer" handleChange={handleChange}/>
                </FormControl>
            </div>

            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" className="text-14">Custom Scrollbars</FormLabel>
                <Switch
                    checked={settings.customScrollbars}
                    onChange={handleChange}
                    aria-label="Custom Scrollbars"
                    name="customScrollbars"
                />
            </FormControl> */}
        </div>
    );
}

export default React.memo(FuseSettings);
