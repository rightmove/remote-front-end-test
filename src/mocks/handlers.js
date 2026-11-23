import { http, HttpResponse } from 'msw';
import { ENDPOINTS } from '../endpoints';

const mockFetchPropertyListingSuccess = http.get(ENDPOINTS.BASIC_PROPERTY_LISTING, () => HttpResponse.json());
const mockFetchPropertyListingFailure = http.get(
    ENDPOINTS.BASIC_PROPERTY_LISTING,
    () => new HttpResponse(null, { status: 500 })
);

const handlers = { mockFetchPropertyListingSuccess, mockFetchPropertyListingFailure };

export const initialHandlers = [handlers.mockFetchPropertyListingSuccess];
