import fetch from 'cross-fetch';

const API_ENDPOINT = 'http://localhost:3000/api/properties';

const propertyListingQuery = () => ({
    queryKey: ['propertyListing'],
    queryFn: async () => {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
            throw new Error(`Failed to fetch properties: ${response.status}`);
        }
        return response.json();
    },
});

export default propertyListingQuery;
