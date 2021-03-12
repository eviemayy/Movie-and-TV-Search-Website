import axios from 'axios';
//http://www.omdbapi.com/?apikey=3ebf31f&t=Psych
const URL = 'http://www.omdbapi.com/?';

export const getTVShow = async (query) => {
    console.log("Req start");
    //var qu = query;
    var APIKEY = "3ebf31f";
    const { data } = await axios.get(URL, {
        params: {
            t: query,
            apikey: APIKEY,
        }
    });

    return data;
}