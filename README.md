# FED Test

## Instructions

This test requires Node.js version v20 or higher to be installed.

Install required dependencies by running `npm ci`. Then start the project by running `npm start`.
The start script will start both the api server and the react app (in the development mode) in parallel.
`npm test` launches the test runner in the interactive watch mode.

## Frontend

The frontend is accessible at http://localhost:5173/.

## API

The api is accessible at `http://localhost:3000/api` and provides the following endpoints.

### `GET /properties`

Returns all properties as a list, which looks like:

```json
[
    {
        "id": 73864112,
        "bedrooms": 3,
        "summary": "Situated moments from the River Thames in Old Chelsea...",
        "displayAddress": "CHEYNE WALK, CHELSEA, SW3",
        "propertyType": "Flat",
        "price": 1950000,
        "branchName": "M2 Property, London",
        "propertyUrl": "/property-for-sale/property-73864112.html",
        "contactUrl": "/property-for-sale/contactBranch.html?propertyId=73864112",
        "propertyTitle": "3 bedroom flat for sale",
        "mainImage": "https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg"
    },
    {
        ...
    }
]
```

#### Filter and sort the result set

In order to filter and sort the result, please the supply relevant query parameters. (e.g. `http://localhost:3000/api/properties?maxPrice=800000`)

| parameter     | description                                                                                                                                                 |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| propertyTypes | Comma separated list of property types to include in your result set<br/> (e.g. detached, semi-detached, terraced, flat, apartment, maisonette, mews, boat) |
| minPrice      | The minimum property price <br/> (e.g. 400000)                                                                                                              |
| maxPrice      | The maximum property price <br/> (e.g. 700000)                                                                                                              |
| minBeds       | The minimum number of bedrooms <br/> (e.g. 3)                                                                                                               |
| maxBeds       | The maximum number of bedrooms <br/> (e.g. 5)                                                                                                               |
| sortBy        | Sort the result by property price or the number of bedrooms <br/> (e.g. price, bedrooms)                                                                    |
| orderBy       | Order the result in either ascending or descending order <br/> (e.g. asc, desc)                                                                             |

**NOTE** Supplying invalid query parameter (empty, null or undefined) will return an empty list. Please omit query parameters without any value.
