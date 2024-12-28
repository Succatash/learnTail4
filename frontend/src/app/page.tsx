import {useState, useEffect} from 'react';

export default function Home() {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('localhost:8000/api/data');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const jsonData = await response.json();
				setData(jsonData);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h2>Data from Hono App</h2>
			<p>{data!}</p>
			{/* Replace with how you want to display the data */}
		</div>
	);
}
