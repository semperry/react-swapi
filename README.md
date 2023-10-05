# react-swapi

A custom React library with hooks for fetching data from the Star Wars API (SWAPI). https://swapi.tech

## Installation

```bash
npm install react-swapi
```

## Usage

The primary function provided by this library is `useSwapi`.

```javascript
import { useSwapi } from "react-swapi";

// Inside your component
const { data, isLoading, error } = useSwapi(resource, options);
```

### Parameters

- `resource`: (string) The type of resource you want to fetch. For example: `'people'`, `'planets'`, etc (see [SWAPI Documentation](https://swapi.tech/documentation) for resources).
- `options`: (optional object) An object to include url params and/or a query string to refine results.

### Return Values

- `data`: The fetched data.
- `isLoading`: A boolean indicating if the fetch request is ongoing.
- `error`: Any error that occurred during the fetch.

### Example

```javascript
import { useSwapi } from "react-swapi";

function StarWarsCharacter() {
	const { data, isLoading, error } = useSwapi("people", { name: "skywalker" });

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return <div>{/* Render your data here */}</div>;
}
```

### Caching Mechanism

To enhance performance and reduce redundant network calls, `react-swapi` incorporates an internal caching mechanism. Here's how it works and how you can benefit from it:

#### How It Works

1. **Initial Request**: The first time you fetch a particular resource or query, `react-swapi` will make a network request to the SWAPI.
2. **Storing Data**: Once the data is retrieved, it's stored in localstorage with a timestamp.
3. **Subsequent Requests**: If you attempt to fetch the same resource or query again, `react-swapi` will skip the network request and directly provide the data from the cache. This results in instantaneous data retrieval, reducing latency and conserving network resources. The cache will refresh on requests made after 1 hour from the initial storage.

#### Benefits

- **Faster Data Retrieval**: Especially noticeable when re-fetching previously fetched data.
- **Reduced Network Load**: Helps in scenarios with limited network availability or where minimizing requests is crucial.
- **Optimized Resource Usage**: Conserves both client and server-side resources.

#### Things to Consider

- **Data Freshness**: Caching is great for performance but be aware that if the data on the SWAPI changes after you've fetched it, the cache will still hold the old data until it's cleared or until the cache expires (if an expiration mechanism is implemented).
- **Manual Cache Management**: In future versions, we may provide ways to manually clear the cache or set cache durations. Watch this space for updates! In the meantime, you can leverage the localstorage api to handle the cache for your own needs.

## See our CONTRIBUTING.md to find out how you can help!
