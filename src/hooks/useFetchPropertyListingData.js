import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { propertyQueries } from '../queries';

const useFetchPropertyListingData = () => {
    const { data, isLoading, error } = useQuery({
        ...propertyQueries.propertyListingQuery(),
        placeholderData: keepPreviousData,
    });

    return { propertyListingData: data, propertyListingError: error, isPropertyListingLoading: isLoading };
};

export default useFetchPropertyListingData;
