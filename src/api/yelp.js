import axios from 'axios'

// https://api.yelp.com/v3/businesses

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ${ApiKey}'
    }
});
