import {combineReducers} from 'redux';
import navigation from './navigation.reducer';
import settings from './settings.reducer';
import navbar from './navbar.reducer';
import message from './message.reducer';
import dialog from './dialog.reducer';
import routes from './routes.reducer';
import auth_info from "./auth_info.reducer";
import dash_info from "./dash_info.reducer";
import pack_info from "./pack_info.reducer";

const fuseReducers = combineReducers({
    navigation,
    settings,
    navbar,
    message,
    dialog,
    routes,
    auth_info,
    dash_info,
    pack_info

});

export default fuseReducers;
