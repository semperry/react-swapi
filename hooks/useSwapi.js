import { useEffect, useState } from "react";
import requireArgument from "../util/requireArgument";

const resources = [
	"films",
	"people",
	"planets",
	"species",
	"vehicles",
	"starships",
];

const useSwapi = (resource = requireArgument("resource"), id, params) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (resources.includes(resource.trim().toLowerCase())) {
			const abortController = new AbortController();
			const signal = abortController.signal;

			let baseUrl = `https://swapi.tech/api/${resource}`;
			if (id) baseUrl += `/${id}`;
			if (params) baseUrl += `/${params}`;

			setIsLoading(true);
			setError(null);
			setData(null);

			fetch(baseUrl)
				.then((res) => res.json())
				.then((data) => setData(data))
				.catch((err) => !signal.aborted && setError(err))
				.finally(() => setIsLoading(false));

			return () => abortController.abort();
		}
	}, [resource, id, params]);

	return { data, isLoading, error };
};

export default useSwapi;
