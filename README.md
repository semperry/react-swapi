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

## Example

```javascript
import { useSwapi } from "react-swapi";

function StarWarsCharacter() {
	const { data, isLoading, error } = useSwapi("people", { name: "skywalker" });

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return <div>{/* Render your data here */}</div>;
}
```

## See our CONTRIBUTING.md to find out how you can help!
