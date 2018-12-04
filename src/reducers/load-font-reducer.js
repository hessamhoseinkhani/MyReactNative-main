export default function(state = {} , action){
    switch(action.type){
        case 'LOAD-FONT':
            return {...state , loadFont : action.payload}
        default:
            return state;
    }
}