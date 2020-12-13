import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const serachApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'cairo'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            console.log(err);
            setErrorMessage('Wrong!');
        }

    }

    useEffect(() => { serachApi('pasta') }, []);

    return [serachApi, results, errorMessage];
};