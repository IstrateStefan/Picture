import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID rwkwnFETzPhlA95b2WBvF1pcIfxk07KfV75bLsGAl9s'
    }
});