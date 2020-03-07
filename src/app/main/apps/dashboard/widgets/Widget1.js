import React, {useState} from 'react';
import {Icon, Typography, Select, Paper, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    rihgticon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        textAlign: 'center',
        border: '1px solid white',
        borderRadius: 4,

    }
}));

function Widget1(props)
{
    const [currentRange, setCurrentRange] = useState(props.widget.currentRange);
    const classes = useStyles(props);

    return (
        <Paper className="w-full rounded-8 shadow-none text-white" style={{backgroundColor: '#00000033'}}>
            <div className="flex items-center p-20">
                <div className="flex-1">
                    <Typography className="text-16">{props.widget.label}</Typography>
                    <Typography
                        className="text-24 text-bold text-center">{props.widget.count}</Typography>
                </div>
                <div className={classes.rihgticon}>
                    <Typography className="flex items-center">
                        <Icon className="text-36" style={{color: 'white'}}>{props.widget.icon}</Icon>
                    </Typography>
                    
                </div>
            </div>
        </Paper>
    );
}

export default React.memo(Widget1);
