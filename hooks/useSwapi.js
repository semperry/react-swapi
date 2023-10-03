import { useEffect, useState } from "react";

import requireArgument from "../util/requireArgument";
import { createSwapiURL, fetchSwapiData } from "../lib/swapiServices";
import * as Pagination from "../util/pagination";

const useSwapi = (resource = requireArgument("resource"), options = {}) => {
	const { page: initialPage = 1, limit = 10 } = options;

	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [page, setPage] = useState(initialPage);

	useEffect(() => {
		const abortController = new AbortController();
		const signal = abortController.signal;

		const fetchData = async () => {
			try {
				setIsLoading(true);
				setError(null);
				const url = createSwapiURL(resource, { ...options, page, limit });
				const { data: fetchedData } = await fetchSwapiData(url, signal);

				setData(fetchedData);
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();

		return () => abortController.abort();
	}, [resource, page, limit]);

	return {
		data,
		isLoading,
		error,
		next: () => setPage((p) => Pagination.next(p)),
		prev: () => setPage((p) => Pagination.prev(p)),
		jump: (toPage) => setPage(Pagination.jump(toPage)),
	};
};

export default useSwapi;
