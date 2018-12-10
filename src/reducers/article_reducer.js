export default function(state = {} , action){
    switch(action.type){
        case 'GET_ARTICLES_ALL':
            //return {...state , articles:action.payload}
            state.articles = [];
            // {...state , articles:[...state.articles , action.payload] }
            return {...state , articles:action.payload}

        case 'GET_ARTICLES_MORE' :
            return {...state , articles : [ ...state.articles , ...action.payload]  }
        default:
            return state;
    }
}