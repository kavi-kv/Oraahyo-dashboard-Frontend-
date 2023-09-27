import axios  from 'axios'

async function fetchQuotes(){

    try{
        const response = await axios.get("http://localhost:5005/xikmado/quotes");
        return response.data;
    }
    catch(err) {
        console.log('Error fetching quotes ',err)
        throw err;
    }
}


export const api = { fetchQuotes };

