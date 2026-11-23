import { http, HttpResponse } from 'msw';
import { ENDPOINTS } from '../endpoints';
import fetchPropertyListingSuccess from './fixtures/fetchPropertyListingSuccess.json';

const mockFetchPropertyListingSuccess = http.get(ENDPOINTS.BASIC_PROPERTY_LISTING, () =>
    HttpResponse.json(fetchPropertyListingSuccess)
);
const mockFetchPropertyListingFailure = http.get(
    ENDPOINTS.BASIC_PROPERTY_LISTING,
    () => new HttpResponse(null, { status: 500 })
);

export const handlers = { mockFetchPropertyListingSuccess, mockFetchPropertyListingFailure };

export const initialHandlers = [handlers.mockFetchPropertyListingSuccess];
