import { combineReducers } from 'redux';
import articles from './article_reducer';
import loadFont from './load-font-reducer';

const rootReducer = combineReducers({
    articles ,
    loadFont
});

export default rootReducer;