import { useState, useCallback } from 'react';

export const useHttp = () => {
	const [loading, setLoading] = useState<boolean>(false);

	const request = useCallback(
		async (
			url: string,
			method = 'GET',
			body = null,
			headers = { 'Content-Type': 'application/json' }
		) => {
			setLoading(true);
			const response = await fetch(url, { method, body, headers });
			const data = await response.json();
            setLoading(false);
			return data;
		},
		[]
	);

	return { loading, request };
};
