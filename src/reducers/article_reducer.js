export default function(state = {} , action){
    switch(action.type){
        case 'GET_ARTICLES_ALL':
            return {...state , articles:action.payload}
        default:
            return state;
    }
}