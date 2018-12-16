import axios from 'axios';

//const URL = `http://chetor.com/wp-json/wp/v2/posts?_embed&page=1`;

export function articlesListAll(URL){
    const request = axios.get(`${URL}`)
                    .then(response => response.data)
     
    
                    
    return {
        type: 'GET_ARTICLES_ALL',
        payload: request ,
        
    };
}

export function articlesListMore(URL){
    const request = axios.get(`${URL}`)
                    .then(response => response.data)
      
    return {
        type: 'GET_ARTICLES_MORE',
        payload:request //{request , currentURL : URL}
    };
}

export function latestURL(URL) {
    return {
        type : 'LATEST_URL' ,
        payload : URL 
    }
}

export function loadFalser() {
    return {
        type : 'LOAD_FALSER' ,
        payload : null
    }
}


export function incrementLoadedPage(pageNum) {
    return {
        type : 'INCREMENT_LOADED_PAGE' ,
        payload : pageNum+1
    }
}

export function getSingleArticle(URL) {
    const request = axios.get(`${URL}`)
                    .then(response => response.data)

    return {
        type : 'GET_SINGLE_ARTICLE' ,
        payload : request
    }
}

export function singleLoadFalser() {
    return {
        type : 'SINGLE_LOAD_FALSER' ,
        payload : null
    }
}

export function loadFontTruth () {
    const fontStatus = {fontIsLoaded : true } 

    return {
        type : 'LOAD-FONT' ,
        payload : fontStatus 
    }
}









/*
export function selectedArticle(id){
    return {
        type : 'SELECTED_ARTICLE' ,
        payload : id 
    };
}
*/

/*
        console.log("object Mounted !!!");
        axios.get('http://chetor.com/wp-json/wp/v2/posts?_embed&page=1')
            .then(Response => this.setState({cards : Response.data})) ;
            componentDidMount = () => {
                fetch('http://chetor.com/wp-json/wp/v2/posts?_embed&page=1', {
                    method: 'GET'
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    this.setState({
                        cards: responseJson
                    })
                })
                .catch((error) => {
                    console.error(error);
                });
                }
                //Alert.alert(this.state.albums.length === 0 ? 'zero':'more');
                */