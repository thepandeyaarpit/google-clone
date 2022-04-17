import React, {useState, useEffect} from 'react';
// import API_KEY from './Key';

const CONTEXT_KEY = "96db385a63d78523f";

const useGoogleSearch = (term) =>{
    const [data,setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyCT4BEJX0oRuWo9QdDBXM_rRUOmkYILSx8&cx=${CONTEXT_KEY}&q=${term}`).then((response)=>response.json()).then((result)=>{
                setData(result);
            })
        }
        fetchData();
    }, [term])

    return { data };
}

export default useGoogleSearch;