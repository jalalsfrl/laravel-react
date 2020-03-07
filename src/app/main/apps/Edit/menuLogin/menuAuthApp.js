import React, {useRef, useState, Component} from 'react';
import {useDispatch, State, useSelector, connect} from 'react-redux';
import axios from 'axios';
import {FuseUtils} from '@fuse';
import {makeStyles} from '@material-ui/styles';
import {API_URL} from '@fuse/urlConfig'
import {
    Button,
    Card,
    CardContent,
    FormControl,
    Grid,
    Icon,
    InputBase,
    TextField,
    Typography,
    withStyles
} from '@material-ui/core';

import {fade} from "@material-ui/core/styles";

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
        width: '100%'
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#ffffff33',
        color: '#fff',
        border: '0px solid #a2a2a2',
        fontSize: 16,
        width: '100%',
        padding: '10px 12px',
        //   transition: theme.transitions.create(['border-color', 'box-shadow']),
        transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            border: '3px solid #a2a2a2',
            backgroundColor: '#00000033',
            margin: '-3px'
        },
    },
}))(InputBase);


const Menu = props => (
    <FormControl className={"w-full mb-12 sm:flex-col md:flex-row"}>
        <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
            <Typography className="font-medium truncate" color="inherit">{props.menu.english}
                </Typography>
        </div>
        <BootstrapInput type='text' className="w-full" name={props.menu.id}  value={props.menu.chinese}   variant="outlined" onChange={props.change}/>
    </FormControl>
);
export default class MenuAuthApp extends Component{
    constructor(props) {
        super(props);

        this.onChangeHandle = this.onChangeHandle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
             menuItems:[]
        };
    }

    componentDidMount() {
        console.log('mount');
        axios.get(API_URL+"/api/menu")
            .then(response=>{
                var  menuinit =  response.data;
                console.log("menuinit");
                console.log(menuinit);
                this.setState({menuItems: menuinit});
            })
            .catch(error=>console.log(error));
    }

    menuList() {

        return this.state.menuItems.map(menuItem => {
            return <Menu menu={menuItem} key={menuItem.id} change={this.onChangeHandle}/>;
        })
    }
    onChangeHandle(e){
        e.preventDefault();
        var temp1 = this.state.menuItems;
        temp1.forEach(tempindex =>{
            if(tempindex['id'] === e.target.name) {
                tempindex['chinese'] =  e.target.value;
            }
            else{

            }
        });
        this.setState({
            menuItems : temp1
            }
         );
    }

    onSubmit(e)
    {
        e.preventDefault();
        console.log(this.state.menuItems);
        // var config = {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     withCredentials: false
        // };
        axios.post('http://hkfblikes.com/api/public/api/menu', this.state.menuItems)
            .then(response => {
                    const menu = response.data;
                    console.log("ok");
                    console.log(response.data);
                    console.log("end");
                    // window.location.reload(false);
                }
            )
            .catch(error=>window.alert("error"+error)
            );

    }

    render() {

        return(
            <React.Fragment>
                <form noValidate  name="fjdkkak" onSubmit={this.onSubmit}>

                    <div className={"w-full mt-8 mb-8 md:w-320 sm:w-full"}>
                        <Typography className="font-medium truncate" color="inherit">Edit/Menu</Typography>
                    </div>

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Card elevation={1} className="flex flex-col text-white mb-24"
                                  style={{backgroundColor: '#00000033'}}>
                                <CardContent className='p-20'>
                                    {this.menuList()}
                                    <Button margin-top='49px' variant="contained" color="secondary"
                                              type="submit">
                                        <Icon>save</Icon>
                                        &nbsp; save
                                    </Button>
                                </CardContent>
                            </Card>

                        </Grid>


                    </Grid>
                </form>

            </React.Fragment>
        )
    }
}

