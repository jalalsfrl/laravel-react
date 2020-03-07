import {combineReducers} from 'redux';
import projects from './projects.reducer';

const reducer = combineReducers({
    projects
});

export default reducer;
