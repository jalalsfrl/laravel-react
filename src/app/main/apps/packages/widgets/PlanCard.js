import React, {useState} from 'react';
import {Icon, Typography, Select, Paper, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    price: {
        fontSize: 36,
        lineHeight: '94px',
        fontWeight: 600,
        textAlign: 'center'
    },
    item: {
        fontSize: 18,
        textAlign: 'center',
        lineHeight: '48px',
        borderBottom: '1px solid #ffffff1f'
    },
    button: {
        margin: theme.spacing(1),
        backgroundColor: '#02ba5a',
        color: 'black',
        marginTop: 30
    },
}));

function PlanCard(props)
{
    const classes = useStyles(props);
    const { info, unit1} = props;
    console.log(unit1);
    return (
        <Paper className="w-full rounded-8 shadow-none text-white p-20" style={{backgroundColor: '#00000033'}}>
            <Typography className="text-16 text-center text-bold">{info.plan}</Typography>
            <Typography className={classes.price}>{info.price}</Typography>

            <Typography className={classes.item}>{unit1.duration}:<b>{info.duration}</b></Typography>
            <Typography className={classes.item}><b>{info.attackSecond}</b>{unit1.attackSecond}</Typography>
            <Typography className={classes.item}><b>{info.concurrent}</b>{unit1.concurrent}</Typography>
            <Typography className={classes.item}><b>{unit1.api}</b>: <b>{info.api}</b></Typography>
            <Typography className={classes.item}><b>{info.limit}</b>{unit1.limit}</Typography>
            <Typography className={classes.item}><b>{info.method}</b> {unit1.method}</Typography>
            <Typography className={classes.item}><b>{info.network}</b> {unit1.network}</Typography>
            
            <div className="text-center">
                <Button variant="contained" color="default" className={classes.button}>
                    {unit1.buttonname}
                </Button>
            </div>
            
        </Paper>
    );
}

export default React.memo(PlanCard);
