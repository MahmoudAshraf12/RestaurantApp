import axios from 'axios'

// https://api.yelp.com/v3/businesses

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer zFhI8KBs0kvzs1RSokQhddtymSyFmirmaYpXNYCt8MbFB1_EljreARFlj9p815UYBT1KizdaY9ZE498rfY1lKzZLgtpW0fGxl9WOWZYMGkReoewZZWFzk20r8m1vZHYx'
    }
});