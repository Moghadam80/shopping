import axios from 'axios'

export default {
    getData: () =>
        axios({
            method: 'GET',
            url: 'https://unogsng.p.rapidapi.com/search',
            params: {
              start_year: '2000',
              orderby: 'rating',
              limit: '100'
            },
            headers: {
              'X-RapidAPI-Key': 'c2ebc475cdmsh93780b3f1aa8c76p1f585djsn8915e55e69ea',
              'X-RapidAPI-Host': 'unogsng.p.rapidapi.com'
            }
          })
}