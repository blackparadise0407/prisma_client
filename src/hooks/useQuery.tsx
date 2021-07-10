import { map } from 'lodash';
import { useLocation } from 'react-router-dom';

function useQuery<T>(): T {
    const { search } = useLocation();
    const queries = search.slice(1).split('&');
    let result = {};
    map(queries, (q) => {
        let pairs = q.split('=');
        if (result[pairs[0]])
            result = {
                ...result,
                [pairs[0]]: [...result[pairs[0]], pairs[1]],
            };
        else
            result = {
                ...result,
                [pairs[0]]: pairs[1],
            };
    });
    return result as T;
}

export default useQuery;
