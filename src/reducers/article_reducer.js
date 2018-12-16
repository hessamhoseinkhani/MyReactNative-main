export default function(state = {} , action){
    switch(action.type){
        case 'LOAD_FALSER'  :
            return  {...state , Loaded : false  }

        case 'SINGLE_LOAD_FALSER'  :
            return  {...state , SingleLoaded : false  }

        case 'INCREMENT_LOADED_PAGE'  :
            return  {...state , LoadedPage : action.payload  }

        case 'GET_ARTICLES_ALL':
            return {...state , articles:action.payload , Loaded : true  }
        
        case 'GET_SINGLE_ARTICLE':
            return {...state , singleArticle : action.payload , SingleLoaded : true  }

        case 'GET_ARTICLES_MORE' :
            return {...state , articles : [ ...state.articles , ...action.payload]  }

        case 'LATEST_URL' : 
            return {...state , currentURL : action.payload , LoadedPage : 2}
        default:
            return state;
    }
}
//, currentURL : action.payload.currentURL  'GET_SINGLE_ARTICLE' 