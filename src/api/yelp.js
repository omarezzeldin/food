import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer WDBPmtXRU0kU_hpSKiVXGbGNId7R91Xi2EmHR_CLGc1UMVpjvCeCzVKgZVMUrDWjezWxKp3pQsjeaas7Xf8SvM4RS4O0lvP8pWZ1MNvYOtMxkXp2xAqYbLoe6F_PX3Yx'
    }
});

