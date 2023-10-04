import { getTimeMS } from "./dateServices";

const BASE_URL = "https://swapi.tech/api";
const CACHE_EXPIRATION = 30 * 60 * 1000; // 1/2 hour in milliseconds
const RESOURCE_SEARCH_MAP = {
	people: ["name"],
	films: ["title"],
	starships: ["name", "model"],
	vehicles: ["name", "model"],
	species: ["name"],
	planets: ["name"],
};

export const createSwapiURL = (resource, options = {}) => {
	const { id, page, limit } = options;
	let url = `${BASE_URL}/${resource}`;

	if (id) url += `/${id}`;
	else {
		const params = new URLSearchParams();

		const queryKeys = RESOURCE_SEARCH_MAP[resource] || [];
		queryKeys.forEach((queryKey) => {
			if (options[queryKey]) {
				params.append(queryKey, options[queryKey]);
			}
		});

		if (page) params.append("page", page);
		if (limit) params.append("limit", limit);

		url += `?${params.toString()}`;
	}

	return url;
};

export const fetchCachedSwapiData = async (url) => {
	const cachedEntry = localStorage.getItem(url);
	const currentTime = getTimeMS();

	if (cachedEntry) {
		const { data, timestamp } = JSON.parse(cachedEntry);

		if (currentTime - timestamp < CACHE_EXPIRATION) return { data };
		else localStorage.removeItem(url);
	}

	return null;
};

export const fetchSwapiData = async (url, abortSignal) => {
	try {
		const cacheCheck = await fetchCachedSwapiData(url);
		if (cacheCheck) return cacheCheck;

		const fetchOptions = {};
		if (abortSignal) fetchOptions.signal = abortSignal;

		const response = await fetch(url, fetchOptions);
		const result = await response.json();

		localStorage.setItem(
			url,
			JSON.stringify({ data: result, timestamp: getTimeMS() })
		);

		return { data: result };
	} catch (error) {
		if (!abortSignal.aborted) {
			return { error: error.message };
		}
	}
};
